# Why Amazon?

When I first started college I had the pleasure of talking to Stephen Orban who currently works at AWS about Amazon in general and what they stood for. He told me about his experience being there and how he was able to develop his career and work with some of the smartest people he's ever met. He also told me about the leadership principles that are deeply involved with Amazon's culture, and after reading more about it, I found that I aligned with them as well and wanted to be be surrounded by those who felt the same way. 

Throughout my academic career, I have always strived to maintain the highest standards I can hold myself to through assignments, hackathons, and even my hobbies. Additionally, my drive to constantly learn led to me transferring out of my community college and into Stevens Institute of Technology. I felt as though my curiousity with computer science out-grew what was being offered so I began to look for programs which would help fill this desire for knowledge I had. So to have some of these principles shape me into who I am now, I feel as though working with people who feel the same way would be incredibly rewarding. 

# Tell me about yourself?

Growing up, I was the type of person who felt it was my responsibility to take the intiative. For example, if a question was asked to a whole group of people, regardless of everyone around me, I would feel the need to answer it. I feel like his sense of initiative has contributed to the success of everything I've worked on. Whenever the opportunity arises, I simply love developing a plan and seeing the whole project through making sure it's completed in the best way possible while making sure everyone involved is completely satsified with what was created.

# Leadership Principles

Important:

customer obsession, dive deep, ownership


## Lighthouse

1. Customer obsession:
    - School project but group needed an idea for a project
    - I recalled an application we used with classes called Piazza that was useful but had drawbacks
    - As a customer I wanted it to have a more intuitive UI, have a better ranking system, and be easier to use
    - Proposed that we use this idea as we all had experience with it and wanted to improve upon it
    - We ended up creating a full stack web app with this idea
2. Ownership:
    - School project was to create a student teacher chat forum to allow better communication between parties
    - We split up the implementation by issues and categorized them and assigned members to categories
    - I was tasked with handling the client side form validation and submitting their AJAX requests
    - When someone from another category needed help like with front end, I made sure to hop on a call with them to solve the issues they were having
    - This allowed us to stay on track with our implementation timeline
    - We were able to complete the project on time with a fully working forum
3. Insist of the hightest standards:
    - We wanted this to be the best project we could create
    - To ensure that no issues would arise in integration between modules I utilized code reviews before merging to production
    - This ensured high quality code that solved the issues was always being pushed to the main branch
    - This allowed us to cleanly implement all desired features leading to the most successful project I have worked on

## Philly Codefest

1. Customer obsession:
    - Needed to figure out an app idea for our first hackathon
    - The theme was centered around finances, so as college students who wanted to know more about the finances of college we thought of what we would have wanted
    - As a new college student, we wanted to know how much debt I would be in for loans, and how long it would take to pay off
    - We used nerd wallet calculators before but nothing quite hit what we were looking for
    - This idea led to the creation of an app that would allow us to calculate the average debt a student at a given uni would get, then calculate how long to pay off
2. Insist on the highest standards (FAILURE):
    - We needed to integrate all of the separate components each member was working on into an android studio application
    - We didn't have any experience with version control so integration was an issue
    - The team did not end up getting any sleep and we stayed up all night trying to integrate each module for hours
    - Eventually we got it to work, but gave up valuable time
    - Going forward, learning version control and continuous integration would help to prevent such issues

## Texas State

1. Have a backbone; disagree and commit:
    - Tasked with predicting battery consumption pre flight
    - Partner originally just wanted to model battery power drop off with respect to time
    - I knew from a previous project that lithium ion batteries drop off in power as they age
    - Instead suggest to predict moves a drone would use during a planned flight, calculate how much power being used, map power consumption for a move and calculate that way
    - With this, time would not be a dependent variable which would be impacted by the battery health
2. Learn and be curious/Deep Dive:
    - When deciding to use ML, I needed to choose a proper model
    - I dove deep into which models to use such as random forests, boosted trees, neural networks, and decision trees
    - Ultimately chose the classifier decision tree since the goal was classification and began to gather data
    - Using this model allowed for an accuracy of 95% in predicting drone maneuvers leading to a successful test
3. Bias for action:
    - Goal of project to figure out to predict battery consumption for drone pre flight
    - Tasked with coming up with method to learn how to solve this problem
    - Originally we came up with the idea to map power consumption to time but this could be inaccurate due to battery degredation
    - No one knew machine learning, but I watched lecture on it so maybe it could be useful
    - Proposed we map power to maneuvers a drone would perform and then use machine learning to predict maneuvers it will perform
    - If this does not work, then we can always fall back on the maneuver mapping
    - However, in simulation this idea worked and the machine learning model gave a 95% accuracy rating


## Senior Design Project

1. Deliver Results:
    - For senior design, client wanted to meet weekly to assign tasks for us to complete
    - For the first semester I was the PM
    - Everyone was taking heavy courseloads including myself making working on project difficult to coordinate
    - Especially with covid
    - As the project manager, I made sure to learn each members schedule
    - This allowed me to find overlaps of free time when people were taking classes 
    - Was able to schedule times to work on project with pair programming
    - We were able to successfully deliver the results the client was expecting

## Project Euler 43 Modified

1. Invent and Simplify:
    - Had to find all permutations of a string of numbers that was a palindrome and satisfied conditions
    - Of course we could do this in $O(n!)$ and generate permuataions and check for condition
    - Thought of simpler method to reduce the need to generate permutations
    - Just generate all the numbers that satisfy condition and build them that way
    - This reduced execution time significantly from 3 sec to an average of 5 ms

## Shifts

1. Customer obsession:
    - Needed an idea for the application
    - Noticed that we were all into stocks and investing but wished we could talk to others about it
    - Played the role of customer to define core functionalities I wanted when using the app
    - Further categorized them into essential and extra features
    - This allowed us to focus on what was important without implementing extra items wasting time
2. Bias for action:
    - The team was nearing a deadline so there were features that had to be cut
    - Due to planning out core and essential features early in the timeline, I could choose what to impelment
    - Decided to not focus on the extra features to save time and get the essential features working
    - This allowed us to fully complete the core features and have a working product with time to spare for attempting extra features




## Customer Obsession:

Problem: At my college, everyone is required to complete a year long project for their senior year. My team was working with a client that wanted to create a product which would rival Zillow and their tool to help customers figure out the hidden costs to buying houses.

Action: Our customer obsession led us to search for possible reasons why when using Zillow, the pricing may differ from actual costs to the consumer. This research led to the realization that the accuracy on housing taxes was something that was really desirable and Zillow fell short on that. To solve this, I took lead of the project and worked closely with my team to aggregate multiple sources of public tax data for New Jersey. 

Result: After obtaining this large data set, I helped in creating a linear regression model to accurately predict the taxes for a homeowner. Then I ensured this was deployed on a React App to demo to my team's client. Additionally, since we aggregated such a large amount of tax data, we were then able to make an API that served this data allowing us to market another product.

## Have Backbone; Disagree and Commit:
## Deep Dive

Problem: During my time at Texas State University as an undergrad research assistant, my partner and I were tasked with predicting battery consumption for drones pre-flight. My mentor was not too keen on machine learning and simply wanted to model the power consumption for one given battery with respect to time. I began to do a deep dive on lithium ion batteries and learned they were not as predictable as they aged so instead, I proposed an idea where we use machine learning to predict the consumption.

Action: I explained that with respect to time, the age of battery would become a dependent variable in the prediction of battery consumption, so instead I proposed instead to predict the maneuvers a drone would perform during it's flight which we could then calcualte how much power it would use while it performed said maneuver. I tasked myself with creating the machine learning model which used a classifier decision tree and my partner who was more experienced with mathematic models was tasked with modeling the power consumptions for maneuvers.

Result: The model was able to predict a drone's flight path with an accuracy of 95% which I was then able to convert to a timeline of maneuvers during a flight. Then using the models my partner created, we simply guaged how much power would be consumed giving us the battery consumption prediction.

## Bias for action:

Problem: During my most hectic semester I was taking the maximum amount of credits allowed while working a job at the library as an assistant. In order to maintain a healthy lifestyle and mindset while upholding my GPA, I constantly had to take risks in how I wanted to allocate my time.

Action: I constantly needed to calculate how I wanted to study and what I wanted to study for if I had a series of back to back exams. I developed the ability to recognize the most important topics I needed to study for this way I could have efficient study periods and a timely sleep pattern. Additionally, I would have to strategically plan the days in which I was training for my powerlifting meet based on my constantly changing exam and project schedules this way I could meet up with teams.

Result: I was able to maintain my hours at my job at the library, keep a stable sleep schedule for the entire semester meaning no all nighters, maintained my competitive GPA, and still participate in my hobbies outside of the classroom like my powerlifting meet.

## Ownership

Problem: Throughout my time at Stevens I helped teach a handful of courses like Algorithms, Fundamentals of Programming Languages, and the Software Development Process. While I would be holding office hours to provide extra help to students in the Software Development Process, I would notice they might not understand an idea from a previous class which I either took or helped teach previously.

Action: I would spend a little extra time if I didn't have a class or meeting to futher help the students with a certain data structure or algorithm if they did not understand it.

Result: As a result, I was still able to complete my office hours while helping those who needed help with the software development process, but I was also able to provide extra help to those who were taking a class that I previously taught or took.

# Phone Screen Questions

1. How has your career developed as you've spent your time here?
#. How was the work life balance as an engineer especially during the pandemic?
#. Do the projects you work on generally stay contained within teams at your office location or do you occasionally work with teams from other office locations? (i.e. Team in Seattle working with one in Boston)
#. Does each team use their own software development process? Like does each team use their own flavor of agile or is it pretty uniform across teams.
#. Why did you choose to work at Amazon?
#. What does your day to day look like?
#. What sort of projects have you worked on?

# Virtual On-site Questions

1. First interview:
    - What does the structure of your team look like?
    - What other teams do you interact with on a day to day basis?
    - Are there any examples of projects where you had to work with multiple teams/sub teams?
    - How does your team stay connected while working from home?
    - What did you do yesterday?
    - What is the endgame or northstar goal of the team/project your currently working on?
2. Second interview:
    - What does te structure of your team look like?
    - What is the biggest challenge your team has encountered?
    - What did you do yesterday?
    - What was your career growth like as an SDE I to SDE II?
    - From what I've gathered, the AWS connect contact lens allows for customers to really hone in on their customers sentiment data. is the northstart goal for AWS connect contact lens?
    - How is the work life balance being at home?
3. Final interview:
    - What is the tech stack like at AWS connect's contact lens?
    - If there were no constraints on the score of contact lens, what would you say its ideal "complete" state would be?
    - What did you do yesterday?
    - What do you miss most about being able to work in person?

# Generic Questions

1. What did you do yesterday?
#. With the new delta variant coming up, do you expect it to have an impact on the projects timeline?
#. How did/does your team stay connected with work from home?
#. What is the biggest challenge your team is working on right now?
#. What does the structure of the team for contact and its related teams?
    - How do they interact on a day to day basis?
    - Are there any projects where you've had to work with multiple teams?
#. What is the endgame or northstar goal of the team/project your currently working on?
