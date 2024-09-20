# VaultView

## What is VaultView?
VaultView is a banking application that allows you to display your banking transactions and other banking information in a clean, responsive dashboard. Users can see their recent transaction, transaction history, see the top categories in terms of spending, transfer money between banking accounts, and connect other bank accounts. Users are able to see a nice donut chart of their current total balance as well!

## Website URL
You can access the live application at the following URL:

[Click here to access the website](https://vaultview.vercel.app)

## How to Use the Application
1. Create a user account, click on the sign up link at the bottom of the intro screen, it should redirect to this page:

![image](https://github.com/user-attachments/assets/a680c6fa-5526-43a3-aa18-3e176d47dbc3)

2. Fill out the sign up form and once creating an account, it should redirect you to the link a bank page: 

![image](https://github.com/user-attachments/assets/ea1a4ea6-0da5-454e-a469-42716f7d67d4)

3. Connect a bank account, and once Plaid connects you to the bank, you will get to this sample bank, in which the 
username is user_good and the password is pass_good 

![image](https://github.com/user-attachments/assets/75103d26-ed94-45be-a07e-6f2cf5444ef9)

4. After entering that information, keep clicking submit without filling in the forms until you get to the bank accounts. From there you can select the bank accounts you want to show up on the dashboard: 

![image](https://github.com/user-attachments/assets/63cbdcde-cfcc-477a-8e7b-527d3781becf)

5. Once entered, after waiting a couple of seconds, the page should redirect you to the main page, with all your information (If a bank account does not appear, add it again using the connect a bank feature for that specific account and it should be added). 

![image](https://github.com/user-attachments/assets/8d59e441-66fa-4a8a-a217-f3feeb92073b)

6. You can now explore all the features! You can see the cards that you have on file and see the pagination of the transaction history. You can now transfer funds between accounts, connect another account, look at all transaction history. 

7. For transferring funds, copy the card id you want to transfer from on the bottom of the card in the My Banks section (there's a copy-able clickable item) and paste that into the recipient ID field in the Transfer Funds form. 

![image](https://github.com/user-attachments/assets/53cb97a7-56bb-4396-a869-a480d527799a)

## Tech Stack
VaultView is built using the following technologies:
- **Frontend:** React, Tailwind CSS, HTML
- **Backend:** Next JS, TypeScript
- **Database:** Appwrite
- **Authentication:** Appwrite
- **APIs:** Plaid, Dwolla API
- **Deployment:** Vercel
- **Error Handling:** Sentry

## How I Came Up With the Idea
I wanted to build an application that would really test my skills as a full stack developer and create an application that would be helpful to other developers understand certain APIs. Developers can get a sense of how to display data in a really useful way in a realistic scenario. It is a great feeling to know how to use APIs correctly, and develop a smooth UI experience to the user. 


