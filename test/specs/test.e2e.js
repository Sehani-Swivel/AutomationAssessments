import LIB_Common from "..//components/LIB_Common.js";
import LIB_Language from "../components/LIB_Language.js";
import LIB_Currency from "../Components/LIB_Currency.js";
import LIB_Stays from "../components/LIB_Stays.js";
import dt_location from "../data/dt_Booking/dt_location.json" assert {type: "json"};
// import dt_reserve from "../data/dt_reserve/dt_reserveDetails.json" assert {type: "json"}

describe ("Automation Assessment", () => {

    it("Open URL", async () => {
        //open the url
        //await dt_url.url
        //await browser.url("https://www.booking.com/");
        //await expect(browser.getTitle()).toEqual('')
        await LIB_Common.openHomePage();
    });

     it("Language selection", async () => {
         //Click on Language icon
         await LIB_Language.bc_SelectLanguage();
        //Set language to English (UK)
        await LIB_Language.bc_setToEnglish();
    });

    it("Currency selection", async () => {
        //Click on Currency icon
        await LIB_Currency.bc_SelectCurrency();
        //Set currency to AUD
        await LIB_Currency.bc_setToAUD();
    });

    it("Stays selection", async () => {
        //Click on the “Stays” Tab on top panel
        await LIB_Stays.bc_ClickOnStays();
        //Type Any location in 'Where are you going' text field
        await LIB_Stays.bc_searchLocation(dt_location.location);
        //Select the Check-in and Checkout dates
        await LIB_Stays.bc_SelectDates(dt_location.checkindate, dt_location.checkoutdate);
        await LIB_Stays.bc_SelectOccupancy(dt_location.occupancy);
        //Click pn search button
        await LIB_Stays.bc_ClickOnSearch();
    });

    it("Filtering", async () => {
        //Select property rating
        //await LIB_Stays.bc_Select5Stars();
        //Select sort by option
        await LIB_Stays.bc_SelectLowestPriceFromSortBy();
    });
         
    it("Enter booking details", async () => {
        //Select second item
        await LIB_Stays.bc_ClickSecondItemFromSearchList();
        //Click reserve button
        await LIB_Stays.bc_ClickReserveButton();
        //Enter reserve details
        await LIB_Stays.bc_EnterDetails(dt_reserve.firstName,dt_reserve.lastName,dt_reserve.email,dt_reserve.phone);
    });
     
    it("Booking Logo", async () => {
        await LIB_Stays.bc_navigateToHomePage();
    })
})