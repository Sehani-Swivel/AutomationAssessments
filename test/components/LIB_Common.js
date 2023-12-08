class CommonPage{

    async openHomePage(){

       browser.url('https://www.booking.com/');
       console.log("Navigating to url 'https://www.booking.com/'");

        browser.pause(3000);
        browser.maximizeWindow();


  }
 }


 export default new CommonPage();
