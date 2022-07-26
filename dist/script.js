var ClickAction = (function () {
    function ClickAction() {
        this.buttonEl = document.querySelector('.buttonEl');
        this.targetAreaEl = document.querySelector('.target_area');
        this.configure();
    }
    ClickAction.prototype.resetAction = function () {
        var targetEl = this.targetAreaEl;
        var childTarget = targetEl.firstChild;
        if (targetEl.hasChildNodes()) {
            console.log('子要素が見つかりました');
            targetEl.removeChild(childTarget);
        }
        else {
            console.log('子要素が見つかりませんでした');
        }
    };
    ClickAction.prototype.buttonAction = function () {
        var _this = this;
        var buttonEl = this.buttonEl;
        var targetEl = this.targetAreaEl;
        var texts = ['当たり', 'ハズレ', 'まあまあ'];
        buttonEl.addEventListener('click', function () {
            _this.resetAction();
            var random = Math.floor(Math.random() * texts.length);
            targetEl.insertAdjacentHTML('afterbegin', texts[random]);
        });
    };
    ClickAction.prototype.configure = function () {
        this.buttonAction();
    };
    return ClickAction;
}());
var clickAction = new ClickAction();
