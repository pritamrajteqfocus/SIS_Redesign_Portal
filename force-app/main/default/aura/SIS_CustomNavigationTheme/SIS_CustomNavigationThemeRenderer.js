({
    render: function (cmp, helper) {
        var ret = this.superRender();
        console.log("render");
        return ret;
    },

    rerender: function (cmp, helper) {
        this.superRerender();
        console.log("rerender");
        // do custom rerendering here
    },

    afterRender: function (component, helper) {
        this.superAfterRender();
        console.log("afterRender");
        // interact with the DOM here
    },

    unrender: function () {
        this.superUnrender();
        console.log("unrender");
        // do custom unrendering here
    }
})