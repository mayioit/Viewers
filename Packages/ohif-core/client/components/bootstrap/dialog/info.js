import { Template } from 'meteor/templating';

Template.dialogInfo.onRendered(() => {
    const instance = Template.instance();

    const $modal = instance.$('.modal');

    $modal.one('hidden.bs.modal', () => instance.data.promiseResolve());
});
