# Google Interview Notes by Steve Yegge \hfill \today

- If you don't get an offer, you may still be qualified to work there!

## Interview anti-loop
- When a set of other employees would not hire an candidate
- EX:
	- Interviewer A asks questions about topic AA
	- Interviewer B asks questions about topic BB
	- If a candidate interviews with both A and B, then it is possible that afterwards, A and B will give different votes for the candidate. They probably wouldn't even hire themselves, however, they both get interviewed by interviewer C about topic CC and by chance, A and B happened to get by.
- If you get in an anti-loop, then you will struggle, then be told you were not a fit at this time, and then you will feel bad. BUT DON'T FEEL META-BAD, EVERYTHING IS OK. It's okay, you're human, it happens `:)`
- Reapply in 6 to 12 months

## Tips
- Only useful for companies that make in-house software
- Short term and long term warm up
	- Long term: study and practice for a week or two before the interview. 
		- You want mind to be in general problem solving mode
	- Short term: get lots of rest the night before, then do intense, fast-paced warm-ups in the morning of the interview.
- 2 best long-term warm ups:
	- Study a DS and algo book
		- Practice the art of recognizing that certain problem classes are best solved with certain algorithms and ds
		- _Steven Skiena's The algorithm Design Manual_
		- _Introduction to Algorithms_
	- Have a friend interview you
		- Spend at least an hour before practicing immediately before you walk into the interview

## Mental Prep
- Go in humble, open-minded, and focused
- DON'T:
	- Question the validity of the interviewer's question
		- Can't tell an interviewer how to interview
	- Divert the interviewer from asking you a question
	- Bluff your interviewer
	- Take too long planning and designing
	- Jump straight in
		- Ask questions and talk about the approach you'll take before doing it
- Treat every question as legitimate, even if you are frustrated and don't know the answer
- Ask for help or hints when stuck
- Ask if they care about syntax
	- Pretend it's someone else's code and you're tasked with finding bugs in it

## Tech Prep Tips

### Algorithm complexity
- Know Big-O

### Sorting
- Know how to sort with $nlog(n)$
	- Quicksort and mergesort

### Hash tables
- Know how to implement one using only arrays in about the space of one interview

### Trees
- Be familiar with at least one flavor of balanced binary tree (RB, Splay, AVL)

### Graphs
- Three ways to represent graphs:
	1. Objects and pointers
	2. Matrix
	3. Adjacency list
- Know DFS and BFS, their complexity and implementation
- Make sure there is absolutely no way of solving it using graphs before moving onto other solution types
- Always think graphs for a question

## OS
- Know processes, threads, and concurrency issues
- Locks, mutexes, semaphores, and monitors
- _Doug Lea's COncurrent Programming in Java_

## Worst case you come back in 6-12 months `:)`