### Indentation

Using VS extension Prettier makes your life easy! The tabs, spaces, and brackets will be handled by Prettier.


### Variable names

- We used descriptive names for variables such as :
groomName , brideName , guestEmail , wishListUrl

- We also apply camelCase style in variables names



### Language constructs

- We used curly brackets when we have a block of code to or one line to be excuted after if or for :
- We used strict equal in each comparsion.
    
  ```javascript
  if (res.data === "That email not exists!") {
          document.getElementById("loginResult").innerText =
            "Login Failed! The email not exists! ";
       
        }
  ```



### Semicolons

- We used semicolon in end of each sentence.







### Opening or closing too many blocks at once

- Blocks are not closed in the same line to make it more readable.

    ```javascript
   componentDidMount() {
    const that = this;
    axios
      .get("http://localhost:5000/food/")
      .then((response) => {
        that.setState({ food: response.data });
        //console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
    ```


### Variable declaration

* Use a new var statement for each line you declare a variable on.
* Do not break variable declarations onto mutiple lines.
* Use a new line for each variable declaration.
* See http://benalman.com/news/2012/05/multiple-var-statements-javascript/ for more details

      ```javascript
           var groomName = 'Abdullah';
           var brideName = 'Esraa';
           var date = '10/12/2020';
           var placeName = 'Aqaba';
    ```



### Minutia


- put commas at the end of each newline, not at the beginning of each item in a list or object.

    ```javascript
    
     this.state = {
      email: "",
      password: "",
    };
    ```

    


  
