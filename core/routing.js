const routing = (e) => {
    let targetElement = e.target;
    console.log(targetElement.tagName);
    if (targetElement.tagName === 'A') {
        e.preventDefault();
        console.log(targetElement.href)
    }
}

document.addEventListener('click', routing);
