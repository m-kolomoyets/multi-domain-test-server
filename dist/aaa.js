"use strict";
const a = {
    all() {
        return {
            queryKey: ["sdfdsfsdf"],
        };
    },
    allBySearch(query) {
        return {
            queryKey: [...a.all().queryKey, query],
        };
    },
};
