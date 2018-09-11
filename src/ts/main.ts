export function render() {
    const findAsin = () => {
        let elementsByClassName = document.getElementsByClassName('label');
        const asinLabel = Array.from(elementsByClassName)
            .find(it => it.innerHTML == "ASIN");

        if (!!asinLabel) {
            const nextElementSibling = asinLabel.nextElementSibling;
            if (!!nextElementSibling) {
                return nextElementSibling.innerHTML
            }
        }

        return null;
    };

    const badgeToInject = document.createElement('div');
    badgeToInject.setAttribute('id', 'badge');
    const hostDiv = document.getElementById('zeitgeistBadge_feature_div');

    if(!!findAsin()) {
        hostDiv.appendChild(badgeToInject);
    }
}

render();

