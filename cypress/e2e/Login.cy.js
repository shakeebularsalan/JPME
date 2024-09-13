import Login from "../../PageObjects/login.cy"

describe("Login Functionality", () =>{

  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("https://partners.staging.jpme.fr/auth/login");

    // Clear cookies, local storage, or other state between tests
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  
  it("Invalid Email and Invalid Password", () => {
    cy.fixture("Logincredentials").then((data) => {
      const loginPage = new Login();
      
      loginPage.Email_field_assertion();
      loginPage.setuseremail(data.invalid_email); //Use invalid email for this test
      
      loginPage.password_field_assertion();
      loginPage.setuserpassword(data.invalid_password); //Use invalid password for this test
      
      loginPage.loginbtclick();
      
      // Add an assertion to verify failed login or URL does not change
      cy.url().should("include", "app/partners/subscription-contract"); // Example check
    });
  });

  it("Invalid Email and Valid Password", () => {
    cy.fixture("Logincredentials").then((data) => {
      const loginPage = new Login();
      
      loginPage.Email_field_assertion();
      loginPage.setuseremail(data.invalid_email); // Use invalid email for this test
      
      loginPage.password_field_assertion();
      loginPage.setuserpassword(data.valid_password); // Use valid password for this test
      
      loginPage.loginbtclick();
      
      
      // Add an assertion to verify successful login and URL change
      cy.url().should("include", "app/partners/subscription-contract"); // Example check
    });

     // Example check
      });
      it("Valid Email and Invalid Password", () => {
        cy.fixture("Logincredentials").then((data) => {
          const loginPage = new Login();
          
          loginPage.Email_field_assertion();
          loginPage.setuseremail(data.valid_email); // Use valid email for this test
          
          loginPage.password_field_assertion();
          loginPage.setuserpassword(data.invalid_password); // Use invalid password for this test
          
          loginPage.loginbtclick();
          
          
          // Add an assertion to verify successful login and URL change
          cy.url().should("include", "app/partners/subscription-contract");

      
        });
  });
  it("Valid Email and Valid Password", () => {
    cy.fixture("Logincredentials").then((data) => {
      const loginPage = new Login();
      
      loginPage.Email_field_assertion();
      loginPage.setuseremail(data.valid_email); // Use valid email for this test
      
      loginPage.password_field_assertion();
      loginPage.setuserpassword(data.valid_password); // Use valid password for this test
      
      loginPage.loginbtclick();
      
      
      // Add an assertion to verify successful login and URL change
      cy.url().should("include", "app/partners/subscription-contract"); // Example check
})
});
});