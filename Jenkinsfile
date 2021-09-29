pipeline {
  agent any
  stages {
    stage('build docker image') {
      steps {
        sh 'export build_number=$BUILD_NUMBER'
        sh 'docker build -t whitelabel-visual --build-arg build_number=$BUILD_NUMBER .'
      }
    }

    stage('run tests in image') {
      parallel {
        stage('run tests in 1st instance') {
          steps {
            sh 'docker run --env build_num=$BUILD_NUMBER whitelabel-visual whitelabel:latest '
          }
        }

        stage('run tests in second instance') {
          steps {
            sh 'docker run --env build_num=$BUILD_NUMBER whitelabel-visual whitelabel:latest '
          }
        }

      }
    }

    stage('stop and delete docker image') {
      steps {
        sh 'docker rm $(docker ps -aq --filter ancestor=whitelabel-visual)'
      }
    }

  }
}