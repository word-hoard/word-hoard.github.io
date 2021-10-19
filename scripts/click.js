class Attr_group {
    constructor(label) {
        this.label = label;
        this.group = document.querySelectorAll(`[${this.label}]`);
    }
    attach_toggle_click() {
        this.group.forEach(element => {
            let target_identifier = element.getAttribute(this.label);
            let target = document.querySelector(target_identifier);
            let click_event = function () {target.classList.toggle("clicked")};
            element.addEventListener("click", click_event);
        });
    }
    attach_group_toggle_click() {
        this.group.forEach(element => {
            let target_identifier = element.getAttribute(this.label);
            let target = document.querySelector(target_identifier);
            let target_group_identifier = target.getAttribute("toggle_group");
            let target_group = document.querySelectorAll(`[toggle_group="${target_group_identifier}"]`);
            let click_event = function () {
                target_group.forEach(element => element.classList.remove("clicked"));
                target.classList.toggle("clicked");
            };
        });
    }
}

window.onload = function() {
    let toggles = new Attr_group("click_toggle");
    toggles.attach_toggle_click();
    let group_toggles = new Attr_group("click_group_toggle");
    group_toggles.attach_group_toggle_click();
    }