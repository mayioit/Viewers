import { Template } from 'meteor/templating';
import { OHIF } from 'meteor/ohif:core';

Template.measurementTableTimepointHeader.helpers({
    timepointName(timepoint) {
        const timepointApi = OHIF.viewer.timepointApi;
        return timepointApi.name(timepoint);
    }
});
