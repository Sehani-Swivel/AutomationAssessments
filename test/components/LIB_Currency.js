import PG_Booking_Currency from "../Pages/PG_Booking_Currency.js";

class Currency {

    //click on currency icon on top panel
    async bc_SelectCurrency(){
        await browser.pause(1200);
        await PG_Booking_Currency.btn_Currency.click();
        await browser.pause(1200);

    }  

     //set to AUD
    async bc_setToAUD(){
        await PG_Booking_Currency.btn_AUD.click();
        await browser.pause(1200);
    }

}

export default new Currency();