import { Meteor } from 'meteor/meteor';
import { OHIF } from 'meteor/ohif:core';

const getTimepointType = study => {
    const timepointApi = OHIF.viewer.timepointApi;
    if (!timepointApi) {
        return;
    }

    const timepoint = timepointApi.study(study.studyInstanceUid)[0];
    if (!timepoint) {
        return;
    }

    return timepoint.timepointType;
};

Meteor.startup(() => {
    HP = HP || false;

    if (HP) {
        HP.addCustomAttribute('timepointType', 'Timepoint Type', getTimepointType);
    }
});
