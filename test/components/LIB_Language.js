import PG_Booking_Language from "../pages/PG_Booking_Language.js";

class Language {

    //click on language icon on top panel
    async bc_SelectLanguage(){
        await PG_Booking_Language.btn_crossIcon.click();
        await browser.pause(1200);
        await PG_Booking_Language.btn_Language.click();
        await browser.pause(1200);
    }


    //set to English (UK)
    async bc_setToEnglish() {
        await PG_Booking_Language.btn_English.click();
        await browser.pause(2000);
    }    

}

export default new Language();