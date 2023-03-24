function ModeSwitch() {
    const cardColor = document.querySelectorAll(".card-bg-color");
    const body = document.querySelector(".body-mode");
    const top_bg = document.querySelector(".container-head");
    const score_color = document.querySelectorAll([".follows-amount", ".dash-title", ".overview--card-score", ".overview-title", ".dash-title"]);
    const tags_titles = document.querySelectorAll([".total-info", ".user-tag", ".follows-text", ".overview--card-title", ".mode-switch", ".dash-title"]);

    body.classList.toggle("body--dark-mode");

    top_bg.classList.toggle("top-bg-dk");

    for(const card of cardColor) {
        card.classList.toggle("card-bg-darkmode");
    }

    for(const score of score_color) {
        score.classList.toggle("card-scores-color");
    }

    for(const tts of tags_titles) {
        tts.classList.toggle("tags-titles-color");
    }
}
