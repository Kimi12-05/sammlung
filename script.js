// Model Daten
const models = {
    lana: {
        name: 'Lana Rhoades',
        initials: 'LR',
        height: '170 cm',
        cup: '32B',
        born: '1996'
    },
    riley: {
        name: 'Riley Reid',
        initials: 'RR',
        height: '163 cm',
        cup: '32A',
        born: '1991'
    },
    abella: {
        name: 'Abella Danger',
        initials: 'AD',
        height: '162 cm',
        cup: '34C',
        born: '1995'
    },
    mia: {
        name: 'Mia Khalifa',
        initials: 'MK',
        height: '157 cm',
        cup: '34DD',
        born: '1993'
    }
};

// Aktive Navigation markieren
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.tab-item').forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Detailseite laden
    if (currentPage === 'detail.html') {
        loadModelDetail();
    }
});

function loadModelDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const modelId = urlParams.get('model');
    
    if (modelId && models[modelId]) {
        const model = models[modelId];
        document.getElementById('modelName').textContent = model.name;
        document.getElementById('profileImage').textContent = model.initials;
        document.getElementById('modelHeight').textContent = model.height;
        document.getElementById('modelCup').textContent = model.cup;
        document.getElementById('modelBorn').textContent = model.born;
    }
}
