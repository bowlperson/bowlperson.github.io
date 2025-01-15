// Define the rows with their respective sites
const rows = [
    [
        { name: "Mission", timeZone: "America/Los_Angeles", link: "https://www.google.com/mission" },
        { name: "Silverbell", timeZone: "America/Phoenix", link: "https://www.google.com/silverbell" },
        { name: "Narm", timeZone: "America/Denver", link: "https://www.google.com/narm" },
        { name: "Ray", timeZone: "America/Chicago", link: "https://www.google.com/ray" },
        { name: "Bald Mountain", timeZone: "America/New_York", link: "https://www.google.com/baldmountain" },
        { name: "Three Oaks", timeZone: "America/Toronto", link: "https://www.google.com/threeoaks" },
        { name: "Bear Run", timeZone: "America/Winnipeg", link: "https://www.google.com/bearrun" },
        { name: "USG", timeZone: "America/Denver", link: "https://www.google.com/usg" },
        { name: "Coal Valley", timeZone: "America/Edmonton", link: "https://www.google.com/coalvalley" },
        { name: "Wolverine", timeZone: "America/Vancouver", link: "https://www.google.com/wolverine" },
        { name: "Gacho Kue", timeZone: "America/Yellowknife", link: "https://www.google.com/gachokue" },
        { name: "Brule", timeZone: "America/Edmonton", link: "https://www.google.com/brule" }
    ],
    [
        { name: "Gac", timeZone: "Africa/Johannesburg", link: "https://www.google.com/gac" },
        { name: "Comliog", timeZone: "Africa/Johannesburg", link: "https://www.google.com/comliog" },
        { name: "Mog", timeZone: "Africa/Johannesburg", link: "https://www.google.com/mog" },
        { name: "Otjikoto", timeZone: "Africa/Windhoek", link: "https://www.google.com/otjikoto" },
        { name: "Rossing", timeZone: "Africa/Windhoek", link: "https://www.google.com/rossing" },
        { name: "Mafube", timeZone: "Africa/Johannesburg", link: "https://www.google.com/mafube" }
    ]
];

const rowsIndex = [0, 0]; // Track the current index for each row

function updateGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = ''; // Clear current grid

    rows.forEach((rowSites, rowIndex) => {
        if (rowIndex === 1) {
            const title = document.createElement('div');
            title.className = 'section-title';
            title.textContent = 'EMEA';
            grid.appendChild(title);
        }

        for (let i = 0; i < 3; i++) {
            const site = rowSites[(rowsIndex[rowIndex] + i) % rowSites.length];
            const now = new Date();
            const time = now.toLocaleTimeString('en-US', {
                timeZone: site.timeZone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });

            const item = document.createElement('div');
            item.className = 'grid-item';
            item.innerHTML = `
                <div class="location">
                    <a href="${site.link}" style="text-decoration: none; color: inherit;">
                        ${site.name}
                    </a>
                </div>
                <div class="time">${time}</div>
            `;
            grid.appendChild(item);
        }

        rowsIndex[rowIndex] = (rowsIndex[rowIndex] + 3) % rowSites.length;
    });
}

// Initial grid update
updateGrid();

// Update the grid every 5 seconds
setInterval(updateGrid, 5000);
