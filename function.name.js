if(!Function.name) {
    Object.defineProperty(Function.prototype, "name",
            {configurable: true, enumerable: false,
                get: function() {
                    return this.toString().match(/function ([a-zA-Z0-9_]+)\(/)[1];
                }
            });
}
