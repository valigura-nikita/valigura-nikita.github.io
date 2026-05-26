function copyServerIp(ip, element) {
    navigator.clipboard.writeText(ip).then(() => {
        const oldContent = element.innerHTML;
        element.innerHTML = "✅ Скопіювано!";
        element.style.borderColor = "#55ff55";
        element.style.color = "#55ff55";
        
        setTimeout(() => {
            element.innerHTML = oldContent;
            element.style.borderColor = "#555";
            element.style.color = "#ffc107";
        }, 2000);
    }).catch(err => {
        alert("IP для копіювання: " + ip);
    });
}