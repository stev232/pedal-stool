# pedal-stool

## Description

This project is to demonstrate our abilities in full stack development along with utilizing a database to hold data. With this we used tools like Sequelize, Handlebars, MySQL/jawsDB, Node.js, express.js, bootstrap, and additional styling through Pure. This project gave us the opportunity to practice not only our skills with recursion but also allowed us to get an oppotunity to create Routes through the Controller for the MVC model. The recursion that occurred during the project will be noticeable in the handlebars files for the blogs posts and the comments for the blog posts.

## Set Up

1. Install docker
2. Run ```npm run db:up```
3. Run ```npm run mysql```
4. Create database using schema.sql file
5. Run ```npm run seed```
6. ```npm start```

## Screenshot
![Screenshot 2023-03-20 at 7 18 56 PM](https://user-images.githubusercontent.com/117046452/226492544-07017f6a-7756-4688-b38b-477d31e322c4.png)


## Page Layout
* HomePage
	* Navigtation
		* Navigation bar will include login/SignUp or logout options
		* If User is signed in they can create a new blog post
	* Content
		* Display the blog post titles along with some content
		    * Display the userName for the user that created the post along with the date that the post was made.
			* Include options to up_vote or down_vote the post
			* Border color changes from green to red depending on the percentage of up_votes to the total of votes<br><br>
	
* BlogPost
	* Navigtation
		* Navigation bar will include login/SignUp or logout options along with a button to return to the homepage
		* If User is signed in they can create a new comments
	* Content
		* Display the blog post titles along with all the content
			* Display the userName for the user that created the post along with the date that the post was made.
			* Include options to up_vote or down_vote the post
			* Border color changes from green to red depending on the percentage of up_votes to the total of votes
	* Comments
		* Display comments below each post
		* The user has the option to delete the comment they made
		* OrderBy id ASC

## Relationships between tables

A __User__ hasMany __Blog__<br>
A __Blog__ belongsTo a __User__<br>
A __User__ hasMany __Comments__<br>
A __Blog__ hasMany __Comments__<br>
A __Comments__ belongsTo a __Blog__<br>

## Database Structure

* blog_post | If deleted Cascade
	* id
		* INTEGER
		* Primary Key
		* Not Null
		* Auto Incement
	* title
		* STRING
		* Not Null
	* content
		* STRING
		* Not Null
	* date
		* DATE -- format MM/DD/YYYY
		* Auto-generated
	* up_votes
		* INTEGER default = 0
	* down_votes
		* INTEGER default = 0
	* user_id
		* INTEGER
		* Not Null
		* Foreign Key -- References user.id<br><br>

* user | If deleted Cascade
	* id
		* INTEGER
		* Primary Key
		* Not Null
		* Auto Incement
	* user_name
		* STRING
		* Not Null
	* email
		* STRING
		* Not Null
	* password
		* STRING
		* Not Null<br><br>

* post_comments
	* id
		* INTEGER
		* Primary Key
		* Not Null
		* Auto Incement
	* content
		* String
		* Not Null
	* user_id
		* INTEGER
		* Not Null
		* Foreign Key -- References user.id
	* blog_post_id
		* INTEGER
		* Not Null
		* Foreign Key -- References blog_post.id

## Presentation Link

### https://docs.google.com/presentation/d/1abj5fC2QaWDB5dnhGyROeJJoqP4IDITWCZrlnj32DlE/edit?usp=sharing

## Deployment

https://pedal-stool.herokuapp.com/
