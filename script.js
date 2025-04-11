document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('hamburger').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

function toggleDetails(matchId) {
    const details = document.getElementById(matchId);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

const matches = [
    {
        id: 'match1',
        group: 'Grup A',
        date: '3 April',
        team1: { name: 'Uzbekistan', flag: 'https://flagcdn.com/w20/uz.png', score: 4 },
        team2: { name: 'Thailand', flag: 'https://flagcdn.com/w20/th.png', score: 1 },
        location: 'Stadion Klub Olahraga Okadh, Taif',
        details: '<strong>Uzbekistan:</strong> Sadriddin Khasanov (2\'), Nurbek Sarsenbaev (13\'), Asilbek Aliev (80\'), Abubakir Shukurullaev (85\')<br><strong>Thailand:</strong> Silvia Mexes (39\')'
    },
    {
        id: 'match2',
        group: 'Grup A',
        date: '3 April',
        team1: { name: 'Arab Saudi', flag: 'https://flagcdn.com/w20/sa.png', score: 2 },
        team2: { name: 'Tiongkok', flag: 'https://flagcdn.com/w20/cn.png', score: 1 },
        location: 'Stadion Olahraga Kota Raja Fahd, Taif',
        details: '<strong>Arab Saudi:</strong> Abdulhadi Matari (11\'), Osama Al-Daghmah (45+2\')<br><strong>Tiongkok:</strong> Wei Xiangxin (90+8\')'
    },
    {
        id: 'match3',
        group: 'Grup B',
        date: '4 April',
        team1: { name: 'Australia', flag: 'https://flagcdn.com/w20/au.png', score: 1 },
        team2: { name: 'Vietnam', flag: 'https://flagcdn.com/w20/vn.png', score: 1 },
        location: 'Stadion Klub Olahraga Okadh, Taif',
        details: '<strong>Australia:</strong> Quinn MacNicol (41\')<br><strong>Vietnam:</strong> Hoang Trong Duy Khang (49\')'
    },
    {
        id: 'match4',
        group: 'Grup B',
        date: '4 April',
        team1: { name: 'Jepang', flag: 'https://flagcdn.com/w20/jp.png', score: 4 },
        team2: { name: 'UEA', flag: 'https://flagcdn.com/w20/ae.png', score: 1 },
        location: 'Stadion Olahraga Kota Raja Fahd, Taif',
        details: '<strong>Jepang:</strong> Minato Yoshida (3\', 15\'), Yuito Kamo (34\'), Hiroto Asada (83\')<br><strong>UEA:</strong> Faysal Mohammed (71\')'
    },
    {
        id: 'match5',
        group: 'Grup C',
        date: '4 April',
        team1: { name: 'Korea Selatan', flag: 'https://flagcdn.com/w20/kr.png', score: 0 },
        team2: { name: 'Indonesia', flag: 'https://flagcdn.com/w20/id.png', score: 1 },
        location: 'Stadion Pangeran Abdullah al-Faisal, Jeddah',
        details: '<strong>Korea Selatan:</strong> -<br><strong>Indonesia:</strong> Evandra Florasta (90+2\')'
    },
    {
        id: 'match6',
        group: 'Grup C',
        date: '4 April',
        team1: { name: 'Yaman', flag: 'https://flagcdn.com/w20/ye.png', score: 2 },
        team2: { name: 'Afghanistan', flag: 'https://flagcdn.com/w20/af.png', score: 0 },
        location: 'Stadion Kota Raja Abdullah, Jeddah',
        details: '<strong>Yaman:</strong> Mohammed Al-Raawi (24\'), Mohammed Al-Garash (27\')<br><strong>Afghanistan:</strong> -'
    },
    {
        id: 'match7',
        group: 'Grup D',
        date: '5 April',
        team1: { name: 'Tajikistan', flag: 'https://flagcdn.com/w20/tj.png', score: 2 },
        team2: { name: 'Oman', flag: 'https://flagcdn.com/w20/om.png', score: 1 },
        location: 'Stadion Pangeran Abdullah al-Faisal, Jeddah',
        details: '<strong>Tajikistan:</strong> Zarif Zarifzoda (3\'), Nazrullo Ashuralizoda (49\')<br><strong>Oman:</strong> Mohammed Al-Mashaykhi (11\')'
    },
    {
        id: 'match8',
        group: 'Grup D',
        date: '5 April',
        team1: { name: 'Iran', flag: 'https://flagcdn.com/w20/ir.png', score: 1 },
        team2: { name: 'Korea Utara', flag: 'https://flagcdn.com/w20/kp.png', score: 1 },
        location: 'Stadion Pangeran Abdullah al-Faisal, Jeddah',
        details: '<strong>Iran:</strong> Mehdi Sahneh (24\')<br><strong>Korea Utara:</strong> Choe Chung-Hyok (8\')'
    },
    {
        id: 'match9',
        group: 'Grup A',
        date: '6 April',
        team1: { name: 'Tiongkok', flag: 'https://flagcdn.com/w20/cn.png', score: 1 },
        team2: { name: 'Uzbekistan', flag: 'https://flagcdn.com/w20/uz.png', score: 2 },
        location: 'Stadion Klub Olahraga Okadh, Taif',
        details: '<strong>Tiongkok:</strong> Zhang Chengrui (33\')<br><strong>Uzbekistan:</strong> Sadriddin Khasanov (45+1\'), Asilbek Aliev (86\')'
    },
    {
        id: 'match10',
        group: 'Grup A',
        date: '6 April',
        team1: { name: 'Thailand', flag: 'https://flagcdn.com/w20/th.png', score: 1 },
        team2: { name: 'Arab Saudi', flag: 'https://flagcdn.com/w20/sa.png', score: 3 },
        location: 'Stadion Olahraga Kota Raja Fahd, Taif',
        details: '<strong>Thailand:</strong> Siwakorn Phonsan (17\')<br><strong>Arab Saudi:</strong> Sabri Dahal (29\'), Abdulrahman Sufyani (75\'), Mukhtar Ali Barnawi (78\')'
    },
    {
        id: 'match11',
        group: 'Grup B',
        date: '7 April',
        team1: { name: 'Vietnam', flag: 'https://flagcdn.com/w20/vn.png', score: 1 },
        team2: { name: 'Jepang', flag: 'https://flagcdn.com/w20/jp.png', score: 1 },
        location: 'Stadion Klub Olahraga Okadh, Taif',
        details: '<strong>Vietnam:</strong> Trần Gia Bảo (90+6\')<br><strong>Jepang:</strong> Minato Yoshida (13\')'
    },
    {
        id: 'match12',
        group: 'Grup C',
        date: '7 April',
        team1: { name: 'Indonesia', flag: 'https://flagcdn.com/w20/id.png', score: 4 },
        team2: { name: 'Yaman', flag: 'https://flagcdn.com/w20/ye.png', score: 1 },
        location: 'Stadion Pangeran Abdullah al-Faisal, Jeddah',
        details: '<strong>Indonesia:</strong> Zahaby Gholy (15\'), Fadly Alberto (25\'), Evandra Florasta (87\', 89\')<br><strong>Yaman:</strong> Mohammed Al-Garash (52\')'
    },
    {
        id: 'match13',
        group: 'Grup B',
        date: '7 April',
        team1: { name: 'UEA', flag: 'https://flagcdn.com/w20/ae.png', score: 2 },
        team2: { name: 'Australia', flag: 'https://flagcdn.com/w20/au.png', score: 0 },
        location: 'Stadion Kota Olahraga Raja Fahd, Taif',
        details: '<strong>UEA:</strong> Mayed Adel Khamis (9\'), Mohamed Buti (52\')<br><strong>Australia:</strong> -'
    },
    {
        id: 'match14',
        group: 'Grup C',
        date: '7 April',
        team1: { name: 'Afghanistan', flag: 'https://flagcdn.com/w20/af.png', score: 0 },
        team2: { name: 'Korea Selatan', flag: 'https://flagcdn.com/w20/kr.png', score: 6 },
        location: 'Stadion Kota Olahraga Raja Abdullah, Jeddah',
        details: '<strong>Afghanistan:</strong> -<br><strong>Korea Selatan:</strong> Jung Hee-Jung (3\'), Kim Ye-Geon (9\'), Kim Eun-Seong (17\', 70\'), Oh Ha-Ram (51\'), Park Byeong-Chan (66\')'
    },
    {
        id: 'match15',
        group: 'Grup D',
        date: '8 April',
        team1: { name: 'Korea Utara', flag: 'https://flagcdn.com/w20/kp.png', score: 3 },
        team2: { name: 'Tajikistan', flag: 'https://flagcdn.com/w20/tj.png', score: 0 },
        location: 'Stadion Kota Olahraga Raja Abdullah, Jeddah',
        details: '<strong>Korea Utara:</strong> Pak Kwang-Song (50\', 58\'), Ri Kang-Rim (82\')<br><strong>Tajikistan:</strong> -'
    },
    {
        id: 'match16',
        group: 'Grup D',
        date: '8 April',
        team1: { name: 'Oman', flag: 'https://flagcdn.com/w20/om.png', score: 3 },
        team2: { name: 'Iran', flag: 'https://flagcdn.com/w20/ir.png', score: 2 },
        location: 'Stadion Pangeran Abdullah al-Faisal, Jeddah',
        details: '<strong>Oman:</strong> Al-Walid Al-Rashdi (53\'), Ahmed Al-Amrani (74\', 89\')<br><strong>Iran:</strong> Mahan Beheshti (40\'), Ehsan Kheradpisheh (54\')'
    },
    {
        id: 'match17',
        group: 'Grup A',
        date: '9 April',
        team1: { name: 'Thailand', flag: 'https://flagcdn.com/w20/th.png', score: 0 },
        team2: { name: 'Tiongkok', flag: 'https://flagcdn.com/w20/cn.png', score: 2 },
        location: 'Stadion Klub Olahraga Okadh, Taif',
        details: '<strong>Thailand:</strong> -<br><strong>Tiongkok:</strong> Bunyamin Abdusalam (56\'), Jiang Zhiqin (59\')'
    },
    {
        id: 'match18',
        group: 'Grup A',
        date: '9 April',
        team1: { name: 'Arab Saudi', flag: 'https://flagcdn.com/w20/sa.png', score: 0 },
        team2: { name: 'Uzbekistan', flag: 'https://flagcdn.com/w20/uz.png', score: 3 },
        location: 'Stadion Kota Olahraga Raja Fahd, Taif',
        details: '<strong>Arab Saudi:</strong> -<br><strong>Uzbekistan:</strong> Jamshidbek Rustamov (57\', 69\'), Asilbek Aliev (63\')'
    },
    {
        id: 'match19',
        group: 'Grup B',
        date: '10 April',
        team1: { name: 'Vietnam', flag: 'https://flagcdn.com/w20/vn.png', score: 1 },
        team2: { name: 'UEA', flag: 'https://flagcdn.com/w20/ae.png', score: 1 },
        location: 'Stadion Kota Olahraga Raja Fahd, Taif',
        details: '<strong>Vietnam:</strong> Hoang Trong Duy Khang (23\')<br><strong>UEA:</strong> Hazaa Faisal (87\')'
    },
    {
        id: 'match20',
        group: 'Grup B',
        date: '10 April',
        team1: { name: 'Jepang', flag: 'https://flagcdn.com/w20/jp.png', score: 2 },
        team2: { name: 'Australia', flag: 'https://flagcdn.com/w20/au.png', score: 3 },
        location: 'Stadion Klub Olahraga Okadh, Taif',
        details: '<strong>Jepang:</strong> Asuto Fujita (7\'), Daichi Tani (86\')<br><strong>Australia:</strong> Miles Milliner (51\'), Max Anastasio (71\'), Alexander Garbowski (74\')'
    },
    {
        id: 'match21',
        group: 'Grup C',
        date: '10 April',
        team1: { name: 'Afghanistan', flag: 'https://flagcdn.com/w20/af.png', score: 0 },
        team2: { name: 'Indonesia', flag: 'https://flagcdn.com/w20/id.png', score: 2 },
        location: 'Stadion Pangeran Abdullah al-Faisal, Jeddah',
        details: '<strong>Afghanistan:</strong> -<br><strong>Indonesia:</strong> Fadly Alberto (90+4\'), Zahaby Gholy (90+6\')'
    },
    {
        id: 'match22',
        group: 'Grup C',
        date: '10 April',
        team1: { name: 'Korea Selatan', flag: 'https://flagcdn.com/w20/kr.png', score: 1 },
        team2: { name: 'Yaman', flag: 'https://flagcdn.com/w20/ye.png', score: 0 },
        location: 'Stadion Kota Olahraga Raja Abdullah, Jeddah',
        details: '<strong>Korea Selatan:</strong> Kim Eun-Seong (29\')<br><strong>Yaman:</strong> -'
    },
    {
        id: 'match23',
        group: 'Grup D',
        date: '11 April',
        team1: { name: 'Iran', flag: 'https://flagcdn.com/w20/ir.png', score: 1 },
        team2: { name: 'Tajikistan', flag: 'https://flagcdn.com/w20/tj.png', score: 3 },
        location: 'Stadion Pangeran Abdullah al-Faisal, Jeddah',
        details: '<strong>Iran:</strong> Omid Gharahchomaghloo (52\')<br><strong>Tajikistan:</strong> Mekhrubon Odilzoda (12\'), Akhmadchon Shoev (67\'), Abdullo Ibragimzoda (89\')'
    },
    {
        id: 'match24',
        group: 'Grup D',
        date: '11 April',
        team1: { name: 'Oman', flag: 'https://flagcdn.com/w20/om.png', score: 2 },
        team2: { name: 'Korea Utara', flag: 'https://flagcdn.com/w20/kp.png', score: 2 },
        location: 'Stadion Kota Olahraga Raja Abdullah, Jeddah',
        details: '<strong>Oman:</strong> Osama Al-Mamari (65\'), Alwalid Salam (90+8\')<br><strong>Korea Utara:</strong> Kim Yu-Jin (10\'), Ri Kang-Rim (74\')'
    }
];

function generateMatchCard(match) {
    return `
        <div class="match-card bg-white p-4 rounded-lg border border-gray-200 shadow-sm" onclick="toggleDetails('${match.id}')">
            <div class="flex justify-between items-center mb-2">
                <div class="text-xs text-gray-500">${match.group} • ${match.date}</div>
                <div class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">FT</div>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex items-center"><img src="${match.team1.flag}" class="flag-icon" alt="${match.team1.name}">${match.team1.name}</div>
                <div class="text-lg font-bold">${match.team1.score}</div>
            </div>
            <div class="flex justify-between items-center mt-2">
                <div class="flex items-center"><img src="${match.team2.flag}" class="flag-icon" alt="${match.team2.name}">${match.team2.name}</div>
                <div class="text-lg font-bold">${match.team2.score}</div>
            </div>
            <div class="mt-3 text-xs text-gray-500"><i class="fas fa-map-marker-alt mr-1"></i> ${match.location}</div>
            <div id="${match.id}" class="goal-details">${match.details}</div>
        </div>
    `;
}

function displayRecentMatches() {
    const recentMatchesContainer = document.getElementById('recent-matches');
    const recentMatches = matches.slice(-4);
    recentMatchesContainer.innerHTML = recentMatches.map(match => generateMatchCard(match)).join('');
}

function displayAllMatches() {
    const allMatchesContainer = document.getElementById('all-matches-list');
    allMatchesContainer.innerHTML = matches.map(match => generateMatchCard(match)).join('');
}

document.getElementById('show-all-matches').addEventListener('click', () => {
    const allMatchesSection = document.getElementById('all-matches');
    const button = document.getElementById('show-all-matches');
    if (allMatchesSection.classList.contains('hidden')) {
        allMatchesSection.classList.remove('hidden');
        button.innerHTML = 'Sembunyikan Semua Hasil <i class="fas fa-chevron-up ml-2"></i>';
        displayAllMatches();
    } else {
        allMatchesSection.classList.add('hidden');
        button.innerHTML = 'Lihat Semua Hasil <i class="fas fa-chevron-right ml-2"></i>';
    }
});

function calculateStandings() {
    const groups = {
        'Grup A': [
            { name: 'Uzbekistan', flag: 'https://flagcdn.com/w20/uz.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 },
            { name: 'Arab Saudi', flag: 'https://flagcdn.com/w20/sa.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 },
            { name: 'Thailand', flag: 'https://flagcdn.com/w20/th.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 },
            { name: 'Tiongkok', flag: 'https://flagcdn.com/w20/cn.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 }
        ],
        'Grup B': [
            { name: 'Jepang', flag: 'https://flagcdn.com/w20/jp.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 },
            { name: 'Vietnam', flag: 'https://flagcdn.com/w20/vn.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 },
            { name: 'Australia', flag: 'https://flagcdn.com/w20/au.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 },
            { name: 'UEA', flag: 'https://flagcdn.com/w20/ae.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 }
        ],
        'Grup C': [
            { name: 'Indonesia', flag: 'https://flagcdn.com/w20/id.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 },
            { name: 'Yaman', flag: 'https://flagcdn.com/w20/ye.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 },
            { name: 'Korea Selatan', flag: 'https://flagcdn.com/w20/kr.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 },
            { name: 'Afghanistan', flag: 'https://flagcdn.com/w20/af.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 }
        ],
        'Grup D': [
            { name: 'Tajikistan', flag: 'https://flagcdn.com/w20/tj.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 },
            { name: 'Iran', flag: 'https://flagcdn.com/w20/ir.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 },
            { name: 'Korea Utara', flag: 'https://flagcdn.com/w20/kp.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 },
            { name: 'Oman', flag: 'https://flagcdn.com/w20/om.png', p: 0, m: 0, s: 0, k: 0, gm: 0, gk: 0, pts: 0 }
        ]
    };

    matches.forEach(match => {
        const group = groups[match.group];
        const team1 = group.find(t => t.name === match.team1.name);
        const team2 = group.find(t => t.name === match.team2.name);

        team1.p += 1;
        team2.p += 1;
        team1.gm += match.team1.score;
        team1.gk += match.team2.score;
        team2.gm += match.team2.score;
        team2.gk += match.team1.score;

        if (match.team1.score > match.team2.score) {
            team1.m += 1;
            team1.pts += 3;
            team2.k += 1;
        } else if (match.team1.score < match.team2.score) {
            team2.m += 1;
            team2.pts += 3;
            team1.k += 1;
        } else {
            team1.s += 1;
            team2.s += 1;
            team1.pts += 1;
            team2.pts += 1;
        }
    });

    function calculateHeadToHeadStandings(teams, groupMatches) {
        const h2hStandings = teams.map(team => ({
            ...team,
            h2hPts: 0,
            h2hGm: 0,
            h2hGk: 0,
            h2hMatches: 0
        }));

        groupMatches.forEach(match => {
            const team1 = h2hStandings.find(t => t.name === match.team1.name);
            const team2 = h2hStandings.find(t => t.name === match.team2.name);

            if (team1 && team2) {
                team1.h2hMatches += 1;
                team2.h2hMatches += 1;
                team1.h2hGm += match.team1.score;
                team1.h2hGk += match.team2.score;
                team2.h2hGm += match.team2.score;
                team2.h2hGk += match.team1.score;

                if (match.team1.score > match.team2.score) {
                    team1.h2hPts += 3;
                } else if (match.team1.score < match.team2.score) {
                    team2.h2hPts += 3;
                } else {
                    team1.h2hPts += 1;
                    team2.h2hPts += 1;
                }
            }
        });

        return h2hStandings.sort((a, b) => {
            if (b.h2hPts !== a.h2hPts) return b.h2hPts - a.h2hPts;
            const h2hGdA = a.h2hGm - a.h2hGk;
            const h2hGdB = b.h2hGm - b.h2hGk;
            if (h2hGdB !== h2hGdA) return h2hGdB - h2hGdA;
            if (b.h2hGm !== a.h2hGm) return b.h2hGm - a.h2hGm;

            const directMatch = groupMatches.find(m =>
                (m.team1.name === a.name && m.team2.name === b.name) ||
                (m.team1.name === b.name && m.team2.name === a.name)
            );

            if (directMatch) {
                const teamAIsTeam1 = directMatch.team1.name === a.name;
                const scoreA = teamAIsTeam1 ? directMatch.team1.score : directMatch.team2.score;
                const scoreB = teamAIsTeam1 ? directMatch.team2.score : directMatch.team1.score;
                if (scoreA !== scoreB) {
                    return scoreB - scoreA;
                }
            }

            const gdA = a.gm - a.gk;
            const gdB = b.gm - b.gk;
            return gdB - gdA;
        });
    }

    Object.keys(groups).forEach(groupName => {
        const groupMatches = matches.filter(m => m.group === groupName);
        let teams = groups[groupName];
        const pointsMap = {};

        teams.forEach(team => {
            if (!pointsMap[team.pts]) pointsMap[team.pts] = [];
            pointsMap[team.pts].push(team);
        });

        const sortedTeams = [];
        Object.keys(pointsMap).sort((a, b) => b - a).forEach(pts => {
            const teamsWithSamePoints = pointsMap[pts];
            if (teamsWithSamePoints.length > 1) {
                const h2hMatches = groupMatches.filter(m =>
                    teamsWithSamePoints.some(t => t.name === m.team1.name) &&
                    teamsWithSamePoints.some(t => t.name === m.team2.name)
                );
                const h2hSorted = calculateHeadToHeadStandings(teamsWithSamePoints, h2hMatches);
                sortedTeams.push(...h2hSorted);
            } else {
                sortedTeams.push(...teamsWithSamePoints);
            }
        });

        groups[groupName] = sortedTeams;
    });

    return groups;
}

function generateGroupTable(groupName, teams) {
    return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-blue-800 text-white py-3 px-4 font-bold"><h3 class="text-xl">${groupName}</h3></div>
            <div class="p-4">
                <table class="w-full">
                    <thead><tr class="text-left text-xs text-gray-600 border-b"><th class="pb-2">Tim</th><th class="pb-2 text-center">P</th><th class="pb-2 text-center">M</th><th class="pb-2 text-center">S</th><th class="pb-2 text-center">K</th><th class="pb-2 text-center">SG</th><th class="pb-2 text-center">Pts</th></tr></thead>
                    <tbody>
                        ${teams.map((team, index) => `
                            <tr class="${index < 2 ? 'qualified' : ''}">
                                <td class="py-2 flex items-center"><img src="${team.flag}" class="flag-icon" alt="${team.name}">${team.name}</td>
                                <td class="py-2 text-center">${team.p}</td>
                                <td class="py-2 text-center">${team.m}</td>
                                <td class="py-2 text-center">${team.s}</td>
                                <td class="py-2 text-center">${team.k}</td>
                                <td class="py-2 text-center">${team.gm - team.gk > 0 ? '+' : ''}${team.gm - team.gk}</td>
                                <td class="py-2 text-center font-bold">${team.pts}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function displayGroupTables() {
    const standings = calculateStandings();
    const groupTablesContainer = document.getElementById('group-tables');
    groupTablesContainer.innerHTML = Object.keys(standings).map(groupName =>
        generateGroupTable(groupName, standings[groupName])
    ).join('');
}

function updateQuarterFinals() {  
    const standings = calculateStandings();  
    const quarterFinalMatches = [  
      { placeholder1: 'Juara Grup A', placeholder2: 'Runner-up Grup B', index: 0 },
      { placeholder1: 'Juara Grup C', placeholder2: 'Runner-up Grup D', index: 1 },  
      { placeholder1: 'Juara Grup B', placeholder2: 'Runner-up Grup A', index: 2 },
      { placeholder1: 'Juara Grup D', placeholder2: 'Runner-up Grup C', index: 3 }  
    ];  
    Object.keys(standings).forEach(groupName => {  
      const teams = standings[groupName];  
      const groupMatches = matches.filter(m => m.group === groupName).length;  
      if (groupMatches === 6) {  
        const winner = teams[0];  
        const runnerUp = teams[1];  
        quarterFinalMatches.forEach(match => {  
          const knockoutMatches = document.querySelectorAll('.knockout-match');  
          if (match.placeholder1 === `Juara ${groupName}`) {  
            const matchElement = knockoutMatches[match.index].querySelectorAll('.flex')[0];  
            matchElement.innerHTML = `<img src="${winner.flag}" class="flag-icon" alt="${winner.name}">${winner.name}`;  
          }  
          if (match.placeholder2 === `Runner-up ${groupName}`) {  
            const matchElement = knockoutMatches[match.index].querySelectorAll('.flex')[1];  
            matchElement.innerHTML = `<img src="${runnerUp.flag}" class="flag-icon" alt="${runnerUp.name}">${runnerUp.name}`;  
          }  
        });  
      }  
    });  
  }

const topscorers = [
    { name: 'Evandra Florasta', team: 'Indonesia', flag: 'https://flagcdn.com/w20/id.png', goals: 3 },
    { name: 'Minato Yoshida', team: 'Jepang', flag: 'https://flagcdn.com/w20/jp.png', goals: 3 },
    { name: 'Asilbek Aliev', team: 'Uzbekistan', flag: 'https://flagcdn.com/w20/uz.png', goals: 3 },
    { name: 'Zahaby Gholy', team: 'Indonesia', flag: 'https://flagcdn.com/w20/id.png', goals: 2 },
    { name: 'Fadly Alberto', team: 'Indonesia', flag: 'https://flagcdn.com/w20/id.png', goals: 2 },
    { name: 'Kim Eun-Seong', team: 'Korea Selatan', flag: 'https://flagcdn.com/w20/kr.png', goals: 3 },
    { name: 'Pak Kwang-Song', team: 'Korea Utara', flag: 'https://flagcdn.com/w20/kp.png', goals: 2 },
    { name: 'Ri Kang-Rim', team: 'Korea Utara', flag: 'https://flagcdn.com/w20/kp.png', goals: 2 },
    { name: 'Sadriddin Khasanov', team: 'Uzbekistan', flag: 'https://flagcdn.com/w20/uz.png', goals: 2 },
    { name: 'Jamshidbek Rustamov', team: 'Uzbekistan', flag: 'https://flagcdn.com/w20/uz.png', goals: 2 },
    { name: 'Mohammed Al-Garash', team: 'Yaman', flag: 'https://flagcdn.com/w20/ye.png', goals: 2 },
    { name: 'Ahmed Al-Amrani', team: 'Oman', flag: 'https://flagcdn.com/w20/om.png', goals: 2 },
    { name: 'Hoang Trong Duy Khang', team: 'Vietnam', flag: 'https://flagcdn.com/w20/vn.png', goals: 2 }
].filter(player => player.goals >= 2);

function generateTopscorersTable() {
    return `
        <table class="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-md">
            <thead class="bg-gray-100">
                <tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peringkat</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pemain</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tim</th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gol</th></tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                ${topscorers.map((player, index) => `
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${index + 1}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${player.name}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center"><img src="${player.flag}" class="flag-icon" alt="${player.team}">${player.team}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${player.goals}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function displayTopscorers() {
    const topscorersContainer = document.getElementById('topscorers-table');
    topscorersContainer.innerHTML = generateTopscorersTable();
}

document.addEventListener('DOMContentLoaded', () => {
    displayRecentMatches();
    displayGroupTables();
    updateQuarterFinals();
    displayTopscorers();
});