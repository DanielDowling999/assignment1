//LOGIN TEST WORKING? (MIGHT WANT TO SWITCH TO A TEST ACCOUNT)
//Test Account details : Name: Test Account
// Email: Test@test.com, password: TestAccount
describe("The Login Page", () => {
  it("successfully loads Login page", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Welcome");
  });
  it("successfully fails a login", () => {
    cy.get("input[type=email]").type("Incorrect@no.com");
    cy.get("input[type=password]").type("wrong");
    cy.get(".button-container").should("contain", "Login").click();
    cy.wait(2000);
    cy.get("h1").should("contain", "Welcome");
  });
  it("successfully loads Signup page", () => {
    cy.get("a").should("contain", "Sign").click();
    cy.url().should("include", "/signup");
    cy.get("h1").should("contain", "Sign Up");

    //Just testing input, but don't want to pollute database so we don't create a new account
    cy.get("input[type=firstName]").type("Testing");
    cy.get("input[type=lastName]").type("Testing2");
    cy.get("input[type=email]").type("Testing3");
    cy.get("input[type=password]").type("Testing4");

    cy.get("a").should("contain", "Log").click();
  });
  //NOTE: IF DATABASE HAS BEEN CLEARED/TEST ACCOUNT REMOVED FROM DATABASE, TESTS WILL FAIL
  it("successfully loads logs in and loads Home page", () => {
    cy.get("input[type=email]").type("Test@Test.com");
    cy.get("input[type=password]").type("TestAccount");
    cy.get(".button-container").should("contain", "Login").click();
    cy.url().should("include", "/home");
    cy.get("h1").should("contain", "Test");
  });

  it("loads Dashboard Page", () => {
    //force true required to bypass 'visibility' issues
    cy.get("[data-testid=nav-dashboard-icon]").click({ force: true });
    cy.url().should("include", "/dashboard");
    cy.get("h1").should("contain", "Stats:");
  });
  //NOTE: IF DATABASE HAS BEEN CLEARED/TEST ACCOUNT REMOVED FROM DATABASE, TEST WILL FAIL
  /* 
  // TODO: FINISH TASKS FOR DASHBOARD, ASK ABOUT TRELLO
  it("sees a Task on the Dashboard", () => {
    cy.get(".task-list").should("contain", "Test Task");
    cy.get("")
  });*/
});
