import PG_Booking_Stays from "../pages/PG_Booking_Stays.js";
import PG_Booking_Reserve from "../pages/PG_Booking_Reserve.js";
//import{expect} from "chai";

class Stays{


    //Click on the "Stays" Tab on top panel
    async bc_ClickOnStays(){
        await PG_Booking_Stays.btn_Stays.click();
    }

    //Type location "Where are you going" text field
    async bc_searchLocation(prm_location){
        await PG_Booking_Stays.tf_Location.click();
        await PG_Booking_Stays.tf_Location.setValue(prm_location);
    }
    
    //Select the check-in and check-out dates
    async bc_SelectDates(prm_checkindate, prm_checkoutdate) {
        await PG_Booking_Stays.dtp_ClickDate.click();
        await PG_Booking_Stays.dtp_checkin(prm_checkindate).click();
        await PG_Booking_Stays.dtp_checkin(prm_checkoutdate).click();
    }

   // Select 1 adults and 0 children and 1 room and verify
    async bc_SelectOccupancy(prm_occupancy) {
        await PG_Booking_Stays.dd_Occupancy.click();
        await PG_Booking_Stays.dd_selectAdult.click();
        var occupancy = await PG_Booking_Stays.dd_Occupancy.getText();
        expect(occupancy).to.equal(prm_occupancy);
    }

    //Click on the Search button
    async bc_ClickOnSearch() {
        await PG_Booking_Stays.btn_Search.click();
    }

    //Select the Property rating
    async bc_Select5Stars() {
        await PG_Booking_Stays.chk_SelectPropertyRating.click();
    }

    //Select the sort by Price in top panel in search result
    async bc_SelectLowestPriceFromSortBy() {
        await PG_Booking_Stays.dd_SortBy.click();
        await PG_Booking_Stays.btn_SortBy.click();
        await PG_Booking_Stays.lnk_LowestFirst.click();
    }

    //Click the second item from the search List page and navigate to the hotel Detail page
    async bc_ClickSecondItemFromSearchList() {
        await PG_Booking_Stays.lnk_SecondItemFromSearchList.click();
    }

    //Click on I’ll reserve button
    async bc_ClickReserveButton() {
        await PG_Booking_Stays.btn_Reserve.click();
    }

    //Fill firstName, lastName & phoneNumber
    async bc_EnterDetails(prm_firstName, prm_lastName, prm_email, prm_phone) {
        await PG_Booking_Reserve.tf_firstName.setValue(prm_firstName);
        await PG_Booking_Reserve.tf_lastName.setValue(prm_lastName);
        await PG_Booking_Reserve.tf_email.setValue(prm_email);
        await PG_Booking_Reserve.tf_phone.setValue(prm_phone);
        await PG_Booking_Reserve.btn_nextFinalDetails.click();
    }

    //Click on Booking.com top logo and navigate to the home page
    async bc_navigateToHomePage () {
        await PG_Booking_Reserve.btn_bookingLogo.click();
    }
}
export default new Stays();