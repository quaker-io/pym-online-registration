Template.dashboardCounts.created = function () {
    this.subscribe('campingRegistrantAccommodationCount');
    this.subscribe('semiprivateRegistrantAccommodationCount');
    this.subscribe('dormRegistrantAccommodationCount');
    this.subscribe('yafRegistrantAccommodationCount');
    this.subscribe('jymRegistrantAccommodationCount');
    this.subscribe('childRegistrantCount');
    this.subscribe('youthRegistrantCount');
    this.subscribe('teenRegistrantCount');
    this.subscribe('youngAdultRegistrantCount');
    this.subscribe('adultRegistrantCount');
    this.subscribe("linensCount");
};

Template.dashboardCounts.helpers({
    'ageGroupCounts': function () {
        // Create an empty counts object
        var ageGroupCounts = {};

        // Get the values for each count
        ageGroupCounts.child = Counts.get('childRegistrantCount');
        ageGroupCounts.youth = Counts.get('youthRegistrantCount');
        ageGroupCounts.teen = Counts.get('teenRegistrantCount');
        ageGroupCounts.youngAdult = Counts.get('youngAdultRegistrantCount');
        ageGroupCounts.adult = Counts.get('adultRegistrantCount');

        // return the registrant counts to the template
        return ageGroupCounts;
    },
    'accommodationCounts': function () {
        // Create an empty counts object
        var accommodationCounts = {};

        // Get the values for each count
        accommodationCounts.camping = Counts.get('campingRegistrantAccommodationCount');
        accommodationCounts.dorm = Counts.get('dormRegistrantAccommodationCount');
        accommodationCounts.semiprivate = Counts.get('semiprivateRegistrantAccommodationCount');
        accommodationCounts.yaf = Counts.get('yafRegistrantAccommodationCount');
        accommodationCounts.jym = Counts.get('jymRegistrantAccommodationCount');

        // return the registrant counts to the template
        return accommodationCounts;
    },
    'linensCount': function () {
        // Return the linens count
        return linensCount = Counts.get('linensCount');
    }
});
