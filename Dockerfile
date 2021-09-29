FROM cypress/included:8.4.0
ARG build_number
RUN mkdir e2e
ENV PERCY_TOKEN="31c31b393df1cc62607a1a34acdded6fabf10d76e7668bfab1a01d89a263eaed"
ENV $PATH=$PATH:$PERCY_TOKEN
ENV build_num=$build_number
ADD ./ /e2e/
WORKDIR /e2e  
RUN npm rebuild
ENTRYPOINT ["npm","run","percy:cypress:record"]
