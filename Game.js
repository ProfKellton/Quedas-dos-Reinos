// --- Variáveis Globais ---
        const game = {
            players: [],
            currentPlayerIndex: 0,
            boardSize: 50,
            log: [],
            promotionTrophies: 3,
            spaces: [],
            spaceTypes: [], // Armazena os tipos de casa para persistência
            difficulty: 'easy',
            selectedMap: 'floresta',
            currentMapTheme: {},
            classes: [
                { name: 'Espadachim', emoji: '⚔️', stats: { atk: 6, def: 8, mana: 4 }, promoted: 'Cavaleiro', image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Espadachim' },
                { name: 'Mago', emoji: '🧙‍♂️', stats: { atk: 5, def: 5, mana: 10 }, promoted: 'Arquimago', image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Mago' },
                { name: 'Bruxo', emoji: '🔮', stats: { atk: 7, def: 5, mana: 8 }, promoted: 'Necromante', image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Bruxo' },
                { name: 'Arqueiro', emoji: '🏹', stats: { atk: 9, def: 4, mana: 5 }, promoted: 'Atirador', image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Arqueiro' },
                { name: 'Escudeiro', emoji: '🛡️', stats: { atk: 4, def: 10, mana: 6 }, promoted: 'Cruzado', image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Escudeiro' },
                { name: 'Druida', emoji: '🌿', stats: { atk: 5, def: 7, mana: 8 }, promoted: 'Sábio da Natureza', image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Druida' },
                { name: 'Bardo', emoji: '🎵', stats: { atk: 6, def: 6, mana: 8 }, promoted: 'Maestro', image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Bardo' },
                { name: 'Bárbaro', emoji: '🪓', stats: { atk: 10, def: 5, mana: 5 }, promoted: 'Berserker', image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Bárbaro' }
            ],
            promotedClasses: {
                'Cavaleiro': { name: 'Cavaleiro', atk: 12, def: 16, mana: 8, image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Cavaleiro' },
                'Arquimago': { name: 'Arquimago', atk: 10, def: 10, mana: 20, image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Arquimago' },
                'Necromante': { name: 'Necromante', atk: 14, def: 10, mana: 16, image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Necromante' },
                'Atirador': { name: 'Atirador', atk: 18, def: 8, mana: 10, image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Atirador' },
                'Cruzado': { name: 'Cruzado', atk: 8, def: 20, mana: 12, image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Cruzado' },
                'Sábio da Natureza': { name: 'Sábio da Natureza', atk: 10, def: 14, mana: 16, image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Sabio' },
                'Maestro': { name: 'Maestro', atk: 12, def: 12, mana: 16, image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Maestro' },
                'Berserker': { name: 'Berserker', atk: 20, def: 10, mana: 10, image: 'https://placehold.co/140x140/6a3d13/d3b482?text=Berserker' }
            },
            mapThemes: {
                floresta: {
                    boss: { name: "Dragão Ancestral", emoji: "🐉", stats: { atk: 15, def: 15, mana: 15 }, image: 'https://placehold.co/100x100/8b0000/fff?text=Dragao' },
                    miniBoss: { name: "Ogro da Floresta", emoji: "👹", stats: { atk: 10, def: 8, mana: 5 }, image: 'https://placehold.co/100x100/FFA500/fff?text=Ogro' },
                    challengeStories: [
                        { text: "Você tropeçou em um enxame de Goblins. Volte 2 casas!", steps: 2, image: 'https://placehold.co/300x200/b22222/fff?text=Goblins' },
                        { text: "Uma Árvore Guardiã te barra o caminho. Volte 3 casas!", steps: 3, image: 'https://placehold.co/300x200/b22222/fff?text=Arvore' },
                        { text: "Você foi envenenado por um Cogumelo Ilusório. Volte 1 casa!", steps: 1, image: 'https://placehold.co/300x200/b22222/fff?text=Cogumelo' }
                    ],
                    bonusStories: [
                        { text: "Você encontrou um Gnomo Mágico. Ele te deu um Troféu e você avança!", steps: 2, image: 'https://placehold.co/300x200/228b22/fff?text=Gnomo' },
                        { text: "Um riacho de águas cristalinas restaurou suas energias. Avance 2 casas!", steps: 2, image: 'https://placehold.co/300x200/228b22/fff?text=Riacho' },
                        { text: "Um tesouro de um aventureiro perdido. Avance 3 casas!", steps: 3, image: 'https://placehold.co/300x200/228b22/fff?text=Tesouro' }
                    ],
                    // Imagens para as casas do tabuleiro
                    bonusImage: "url('https://placehold.co/50x50/228b22/FFFFFF?text=B')",
                    challengeImage: "url('https://placehold.co/50x50/b22222/FFFFFF?text=D')",
                    bossImage: "url('https://placehold.co/50x50/8b0000/FFFFFF?text=BOSS')"
                },
                masmorra: {
                    boss: { name: "O Lich Supremo", emoji: "💀", stats: { atk: 18, def: 12, mana: 18 }, image: 'https://placehold.co/100x100/000000/fff?text=Lich' },
                    miniBoss: { name: "Lorde Esqueleto", emoji: "🦴", stats: { atk: 12, def: 10, mana: 8 }, image: 'https://placehold.co/100x100/FFA500/fff?text=Esqueleto' },
                    challengeStories: [
                        { text: "Um exército de Esqueletos te ataca! Volte 3 casas!", steps: 3, image: 'https://placehold.co/300x200/b22222/fff?text=Esqueletos' },
                        { text: "Você ativou uma armadilha de espinhos. Volte 2 casas!", steps: 2, image: 'https://placehold.co/300x200/b22222/fff?text=Armadilha' },
                        { text: "Você se perdeu nos corredores escuros da Masmorra. Volte 4 casas!", steps: 4, image: 'https://placehold.co/300x200/b22222/fff?text=Corredor' }
                    ],
                    bonusStories: [
                        { text: "Você encontrou um baú de tesouro com um Troféu!", steps: 0, image: 'https://placehold.co/300x200/228b22/fff?text=Bau' },
                        { text: "Um fantasma amigável te guia para um atalho. Avance 3 casas!", steps: 3, image: 'https://placehold.co/300x200/228b22/fff?text=Fantasma' },
                        { text: "Você achou uma poção de velocidade. Avance 2 casas!", steps: 2, image: 'https://placehold.co/300x200/228b22/fff?text=Pocao' }
                    ],
                    bonusImage: "url('https://placehold.co/50x50/228b22/FFFFFF?text=B')",
                    challengeImage: "url('https://placehold.co/50x50/b22222/FFFFFF?text=D')",
                    bossImage: "url('https://placehold.co/50x50/8b0000/FFFFFF?text=BOSS')"
                },
                planicie: {
                    boss: { name: "O Gigante da Terra", emoji: "🗿", stats: { atk: 20, def: 20, mana: 5 }, image: 'https://placehold.co/100x100/708090/fff?text=Gigante' },
                    miniBoss: { name: "Wyvern Infernal", emoji: "🔥", stats: { atk: 15, def: 10, mana: 12 }, image: 'https://placehold.co/100x100/FFA500/fff?text=Wyvern' },
                    challengeStories: [
                        { text: "Um Trovão Elétrico te atingiu! Volte 2 casas!", steps: 2, image: 'https://placehold.co/300x200/b22222/fff?text=Trovao' },
                        { text: "Uma horda de Cães Infernais te encurrala. Volte 3 casas!", steps: 3, image: 'https://placehold.co/300x200/b22222/fff?text=Caes' },
                        { text: "Você foi pego em um redemoinho. Volte 1 casa!", steps: 1, image: 'https://placehold.co/300x200/b22222/fff?text=Redemoinho' }
                    ],
                    bonusStories: [
                        { text: "Você achou um cristal de mana. Ganhe um Troféu!", steps: 0, image: 'https://placehold.co/300x200/228b22/fff?text=Cristal' },
                        { text: "Uma caravana te dá uma carona. Avance 4 casas!", steps: 4, image: 'https://placehold.co/300x200/228b22/fff?text=Caravana' },
                        { text: "Você foi abençoado pelos deuses. Avance 2 casas!", steps: 2, image: 'https://placehold.co/300x200/228b22/fff?text=Bencao' }
                    ],
                    bonusImage: "url('https://placehold.co/50x50/228b22/FFFFFF?text=B')",
                    challengeImage: "url('https://placehold.co/50x50/b22222/FFFFFF?text=D')",
                    bossImage: "url('https://placehold.co/50x50/8b0000/FFFFFF?text=BOSS')"
                },
                castelo: {
                    boss: { name: "O Rei Sanguinário", emoji: "👑", stats: { atk: 16, def: 18, mana: 10 }, image: 'https://placehold.co/100x100/8b0000/fff?text=Rei' },
                    miniBoss: { name: "General da Guarda", emoji: "🛡️", stats: { atk: 12, def: 15, mana: 10 }, image: 'https://placehold.co/100x100/FFA500/fff?text=General' },
                    challengeStories: [
                        { text: "Fui preso pela Guarda Real! Volte 2 casas!", steps: 2, image: 'https://placehold.co/300x200/b22222/fff?text=Guarda' },
                        { text: "O chão desmorona, levando a um buraco! Volte 3 casas!", steps: 3, image: 'https://placehold.co/300x200/b22222/fff?text=Buraco' },
                        { text: "Um assassino de elite te persegue. Volte 1 casa!", steps: 1, image: 'https://placehold.co/300x200/b22222/fff?text=Assassino' }
                    ],
                    bonusStories: [
                        { text: "Você foi reconhecido como um herói e ganhou um Troféu!", steps: 0, image: 'https://placehold.co/300x200/228b22/fff?text=Heroi' },
                        { text: "Uma passagem secreta te leva a um atalho. Avance 3 casas!", steps: 3, image: 'https://placehold.co/300x200/228b22/fff?text=Passagem' },
                        { text: "Você encontrou uma armadura lendária. Avance 2 casas!", steps: 2, image: 'https://placehold.co/300x200/228b22/fff?text=Armadura' }
                    ],
                    bonusImage: "url('https://placehold.co/50x50/228b22/FFFFFF?text=B')",
                    challengeImage: "url('https://placehold.co/50x50/b22222/FFFFFF?text=D')",
                    bossImage: "url('https://placehold.co/50x50/8b0000/FFFFFF?text=BOSS')"
                },
                pantano: {
                    boss: { name: "A Sereia Maldita", emoji: "🧜‍♀️", stats: { atk: 10, def: 10, mana: 20 }, image: 'https://placehold.co/100x100/4B5320/fff?text=Sereia' },
                    miniBoss: { name: "Rei Sapo Gigante", emoji: "🐸", stats: { atk: 8, def: 10, mana: 15 }, image: 'https://placehold.co/100x100/FFA500/fff?text=Sapo' },
                    challengeStories: [
                        { text: "Uma nuvem de gás tóxico te paralisa. Volte 2 casas!", steps: 2, image: 'https://placehold.co/300x200/b22222/fff?text=Gas' },
                        { text: "Você foi atacado por uma Sanguessuga Gigante! Volte 3 casas!", steps: 3, image: 'https://placehold.co/300x200/b22222/fff?text=Sanguessuga' },
                        { text: "O terreno pantanoso te prende. Volte 1 casa!", steps: 1, image: 'https://placehold.co/300x200/b22222/fff?text=Terreno' }
                    ],
                    bonusStories: [
                        { text: "Você encontrou um cogumelo mágico que te dá um Troféu!", steps: 0, image: 'https://placehold.co/300x200/228b22/fff?text=Cogumelo' },
                        { text: "Uma tartaruga sábia te leva em suas costas. Avance 3 casas!", steps: 3, image: 'https://placehold.co/300x200/228b22/fff?text=Tartaruga' },
                        { text: "Você encontrou um cajado ancestral. Avance 2 casas!", steps: 2, image: 'https://placehold.co/300x200/228b22/fff?text=Cajado' }
                    ],
                    bonusImage: "url('https://placehold.co/50x50/228b22/FFFFFF?text=B')",
                    challengeImage: "url('https://placehold.co/50x50/b22222/FFFFFF?text=D')",
                    bossImage: "url('https://placehold.co/50x50/8b0000/FFFFFF?text=BOSS')"
                },
                deserto: {
                    boss: { name: "O Sacerdote do Sol", emoji: "☀️", stats: { atk: 12, def: 12, mana: 16 }, image: 'https://placehold.co/100x100/F4A460/fff?text=Sacerdote' },
                    miniBoss: { name: "Serpente de Areia", emoji: "🐍", stats: { atk: 10, def: 8, mana: 10 }, image: 'https://placehold.co/100x100/FFA500/fff?text=Serpente' },
                    challengeStories: [
                        { text: "Uma tempestade de areia te desorienta. Volte 3 casas!", steps: 3, image: 'https://placehold.co/300x200/b22222/fff?text=Tempestade' },
                        { text: "Um Golem de Areia te ataca! Volte 2 casas!", steps: 2, image: 'https://placehold.co/300x200/b22222/fff?text=Golem' },
                        { text: "Você foi mordido por um Escorpião Gigante. Volte 1 casa!", steps: 1, image: 'https://placehold.co/300x200/b22222/fff?text=Escorpiao' }
                    ],
                    bonusStories: [
                        { text: "Você encontrou um oásis com uma fruta sagrada. Ganhe um Troféu!", steps: 0, image: 'https://placehold.co/300x200/228b22/fff?text=Oasis' },
                        { text: "Um mapa antigo te leva a um atalho. Avance 4 casas!", steps: 4, image: 'https://placehold.co/300x200/228b22/fff?text=Mapa' },
                        { text: "Você encontrou uma lâmpada mágica. Avance 2 casas!", steps: 2, image: 'https://placehold.co/300x200/228b22/fff?text=Lampada' }
                    ],
                    bonusImage: "url('https://placehold.co/50x50/228b22/FFFFFF?text=B')",
                    challengeImage: "url('https://placehold.co/50x50/b22222/FFFFFF?text=D')",
                    bossImage: "url('https://placehold.co/50x50/8b0000/FFFFFF?text=BOSS')"
                }
            }
        };

        // Variável global para armazenar o jogador que está esperando pelo boss
        let playerWaitingForBoss = null;

        // --- Elementos do DOM ---
        const mainMenuScreen = document.getElementById('main-menu');
        const setupScreen = document.getElementById('setup-screen');
        const gameScreen = document.getElementById('game-screen');
        const winScreen = document.getElementById('win-screen');
        const conflictScreen = document.getElementById('conflict-screen');
        const messageBox = document.getElementById('message-box');
        const gameBoard = document.getElementById('game-board');
        const turnInfo = document.getElementById('turn-info');
        const rollDiceBtn = document.getElementById('roll-dice-btn');
        const diceResultDiv = document.getElementById('dice-result');
        const cardPopup = document.getElementById('card-popup');
        const cardTitle = document.getElementById('card-title');
        const cardDescription = document.getElementById('card-description');
        const playerSetupForm = document.getElementById('player-setup-form');
        const playerCountSelect = document.getElementById('player-count');
        const aiCountSelect = document.getElementById('ai-count');
        const difficultySelect = document.getElementById('difficulty-select');
        const mapSelect = document.getElementById('map-select');
        const logPanel = document.getElementById('log-panel');
        const logContent = document.getElementById('log-content');
        const peaceBtn = document.getElementById('peace-btn');
        const conflictBtn = document.getElementById('conflict-btn');
        const closeConflictBtn = document.getElementById('close-conflict-btn');
        const conflictTitle = document.getElementById('conflict-title');
        const rulesBtn = document.getElementById('rules-btn');
        const rulesScreen = document.getElementById('rules-screen');
        const closeRulesBtn = document.getElementById('close-rules-btn');
        const characterCardPopup = document.getElementById('character-card-popup');
        const closeCharacterCardBtn = document.getElementById('close-character-card-btn');
        const leaveGameBtn = document.getElementById('leave-game-btn');
        const backToMainBtn = document.getElementById('back-to-main-btn');
        const bossChoicePopup = document.getElementById('boss-choice-popup');
        const bossFightAloneBtn = document.getElementById('boss-fight-alone-btn');
        const bossWaitBtn = document.getElementById('boss-wait-btn');
        const toggleLogBtn = document.getElementById('toggle-log-btn');
        const closeLogBtn = document.getElementById('close-log-btn');
        
        // --- Event Listeners ---
        document.getElementById('start-game-btn').addEventListener('click', () => showScreen('setup'));
        document.getElementById('begin-game-btn').addEventListener('click', () => initializeGame());
        document.getElementById('play-again-btn').addEventListener('click', () => { location.reload(); });
        rollDiceBtn.addEventListener('click', () => {
            if (rollDiceBtn.disabled) return;
            rollDice();
        });
        rulesBtn.addEventListener('click', () => rulesScreen.classList.remove('hidden'));
        closeRulesBtn.addEventListener('click', () => rulesScreen.classList.add('hidden'));
        closeCharacterCardBtn.addEventListener('click', () => characterCardPopup.classList.add('hidden'));
        leaveGameBtn.addEventListener('click', () => {
            stopAllMusic();
            location.reload();
        });
        backToMainBtn.addEventListener('click', () => showScreen('main'));
        
        playerCountSelect.addEventListener('change', createPlayerSetup);
        aiCountSelect.addEventListener('change', createPlayerSetup);

        // Lógica de escolha do Boss
        bossFightAloneBtn.addEventListener('click', () => handleBossChoice(game.players[game.currentPlayerIndex], 'fight'));
        bossWaitBtn.addEventListener('click', () => handleBossChoice(game.players[game.currentPlayerIndex], 'wait'));
        
        // Lógica do Log para mobile
        toggleLogBtn.addEventListener('click', () => logPanel.classList.toggle('hidden'));
        closeLogBtn.addEventListener('click', () => logPanel.classList.add('hidden'));


        // --- Funções de Música ---
        function stopAllMusic() {
            const audios = document.querySelectorAll('audio');
            audios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
        }

        function playMusic(trackId) {
            stopAllMusic();
            const music = document.getElementById(trackId);
            if (music) {
                music.play().catch(e => console.log("A reprodução de áudio foi bloqueada pelo navegador."));
            }
        }
        
        // --- Funções de Lógica do Jogo ---

        // Alterna entre as telas do jogo
        function showScreen(screen) {
            const screens = [mainMenuScreen, setupScreen, gameScreen, winScreen];
            screens.forEach(s => s.style.display = 'none');

            // Esconde todas as popups
            characterCardPopup.classList.add('hidden');
            cardPopup.classList.add('hidden');
            conflictScreen.classList.add('hidden');
            bossChoicePopup.classList.add('hidden');
            logPanel.classList.add('hidden');


            switch (screen) {
                case 'main': 
                    mainMenuScreen.style.display = 'flex'; 
                    playMusic('music-menu');
                    break;
                case 'setup': 
                    setupScreen.style.display = 'flex'; 
                    playMusic('music-menu');
                    break;
                case 'game': 
                    gameScreen.style.display = 'flex'; 
                    playMusic(`music-${game.selectedMap}`);
                    // Mostra o log panel em telas maiores
                    if (window.innerWidth >= 1024) {
                        logPanel.classList.remove('hidden');
                    }
                    break;
                case 'win': 
                    winScreen.style.display = 'flex'; 
                    stopAllMusic();
                    break;
                case 'conflict': 
                    conflictScreen.style.display = 'flex'; 
                    break;
            }
        }

        // Exibe uma mensagem temporária na tela
        function showMessage(msg, duration = 3000) {
            messageBox.textContent = msg;
            messageBox.classList.remove('hidden');
            setTimeout(() => messageBox.classList.add('hidden'), duration);
        }

        // Adiciona uma entrada ao log de movimentos
        function addLogEntry(msg) {
            game.log.unshift(msg);
            if (game.log.length > 10) {
                game.log.pop();
            }
            logContent.innerHTML = game.log.map(entry => `<div>${entry}</div>`).join('');
        }

        // Gera a interface de seleção de jogadores dinamicamente
        function createPlayerSetup() {
            playerSetupForm.innerHTML = '';
            const playerCount = parseInt(playerCountSelect.value);

            // Crie uma lista de classes disponíveis para os jogadores humanos
            const availableClasses = [...game.classes];

            for (let i = 0; i < playerCount; i++) {
                const playerDiv = document.createElement('div');
                playerDiv.className = 'flex items-center space-x-2';
                const classOptions = availableClasses.map(c => `<option value="${c.name}">${c.emoji} ${c.name}</option>`).join('');
                playerDiv.innerHTML = `
                    <label>Jogador ${i + 1}:</label>
                    <input type="text" placeholder="Nome" class="player-name bg-gray-700 text-amber-300 p-1 rounded" required>
                    <div class="relative inline-block">
                        <select class="player-class bg-gray-700 text-amber-300 p-1 rounded">
                            ${classOptions}
                        </select>
                        <span class="view-icon" onclick="showCharacterCard(this.previousElementSibling.value)">👁️</span>
                    </div>
                `;
                playerSetupForm.appendChild(playerDiv);
            }
        }

        // Mostra a carta de personagem
        function showCharacterCard(className) {
            const charClass = game.classes.find(c => c.name === className);
            const promotedClass = game.promotedClasses[charClass.promoted];
            
            document.getElementById('character-card-img').src = charClass.image;
            document.getElementById('character-card-img').alt = `Imagem de ${charClass.name}`;
            document.getElementById('character-card-name').textContent = charClass.name;
            document.getElementById('character-card-class').textContent = `${charClass.emoji} ${charClass.name}`;
            document.getElementById('character-card-atk').textContent = charClass.stats.atk;
            document.getElementById('character-card-def').textContent = charClass.stats.def;
            document.getElementById('character-card-mana').textContent = charClass.stats.mana;
            
            document.getElementById('character-card-promoted-class').textContent = promotedClass ? promotedClass.name : 'N/A';
            document.getElementById('character-promoted-atk').textContent = promotedClass ? promotedClass.atk : 'N/A';
            document.getElementById('character-promoted-def').textContent = promotedClass ? promotedClass.def : 'N/A';
            document.getElementById('character-promoted-mana').textContent = promotedClass ? promotedClass.mana : 'N/A';
            
            characterCardPopup.classList.remove('hidden');
        }

        // Prepara o jogo com os jogadores selecionados e IAs
        function initializeGame() {
            const playerCount = parseInt(playerCountSelect.value);
            const aiCount = parseInt(aiCountSelect.value);
            game.difficulty = difficultySelect.value;
            game.selectedMap = mapSelect.value;
            game.currentMapTheme = game.mapThemes[game.selectedMap];
            
            const playerNames = document.querySelectorAll('.player-name');
            const playerClasses = document.querySelectorAll('.player-class');
            const chosenClassNames = Array.from(playerClasses).map(s => s.value);
            game.players = [];

            // Adiciona jogadores humanos
            playerNames.forEach((input, i) => {
                const name = input.value || `Jogador ${i + 1}`;
                const className = playerClasses[i].value;
                const baseClass = game.classes.find(c => c.name === className);
                game.players.push({
                    name,
                    class: className,
                    baseClass: baseClass,
                    isPromoted: false,
                    position: 0,
                    trophies: 0,
                    isAI: false,
                    stats: { ...baseClass.stats },
                    image: baseClass.image
                });
            });

            // Adiciona IAs
            const allClasses = game.classes.map(c => c.name);
            let availableClasses = allClasses.filter(c => !chosenClassNames.includes(c));
            
            // Garante que há classes suficientes para IAs, mesmo que repetidas
            while (availableClasses.length < aiCount) {
                availableClasses = availableClasses.concat(allClasses);
            }

            for (let i = 0; i < aiCount; i++) {
                const aiClassName = availableClasses[i];
                const aiClass = game.classes.find(c => c.name === aiClassName);
                game.players.push({
                    name: `IA - ${aiClassName}`,
                    class: aiClassName,
                    baseClass: aiClass,
                    isPromoted: false,
                    position: 0,
                    trophies: 0,
                    isAI: true,
                    stats: { ...aiClass.stats },
                    image: aiClass.image
                });
            }
            
            // Sorteia a ordem de jogo
            game.players.sort(() => Math.random() - 0.5);
            game.currentPlayerIndex = 0;
            
            // Gera os tipos de casa uma vez para persistirem
            game.spaceTypes = generateRandomSpaces(game.boardSize);

            createBoard();
            renderPlayers();
            showScreen('game');
            updateDisplay();
            addLogEntry(`A ordem de jogada foi sorteada. É a vez de ${game.players[game.currentPlayerIndex].name}!`);
            if (game.players[game.currentPlayerIndex].isAI) {
                setTimeout(() => playTurn(), 2000);
            }
        }
        
        // --- NOVO: Gerador de números pseudo-aleatórios com semente (para layout do tabuleiro) ---
        function seededRandom(seed) {
            let state = seed;
            return function() {
                state = (state * 9301 + 49297) % 233280;
                return state / 233280;
            };
        }

        // Gera coordenadas para um tabuleiro de forma irregular, evitando sobreposição e mantendo dentro dos limites
        function generateIrregularPathCoords(size, width, height) {
            // Cria uma semente a partir do nome do mapa para ter um layout consistente
            let seed = 0;
            for (let i = 0; i < game.selectedMap.length; i++) {
                seed += game.selectedMap.charCodeAt(i);
            }
            const random = seededRandom(seed);

            const coords = [];
            const spaceSize = 45;
            const minDistance = spaceSize * 0.8;
            const padding = 5;

            for (let i = 0; i < size; i++) {
                let x, y;
                let validPosition = false;
                let attempts = 0;

                while (!validPosition && attempts < 100) {
                    attempts++;
                    if (i === 0) {
                        x = padding;
                        y = padding;
                    } else {
                        const prev = coords[i - 1];
                        let baseAngle = Math.PI / 4;
                        if (i > 1) {
                            const prev2 = coords[i - 2];
                            baseAngle = Math.atan2(prev.y - prev2.y, prev.x - prev2.x);
                        }
                        
                        const angleVariation = (random() - 0.5) * Math.PI / 1.5;
                        const angle = baseAngle + angleVariation;
                        const distance = minDistance + (random() * 20);

                        x = prev.x + Math.cos(angle) * distance;
                        y = prev.y + Math.sin(angle) * distance;
                    }

                    if (x < padding || x > width - spaceSize - padding || y < padding || y > height - spaceSize - padding) {
                        continue;
                    }

                    let isOverlapping = false;
                    for (const pos of coords) {
                        const dist = Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
                        if (dist < minDistance) {
                            isOverlapping = true;
                            break;
                        }
                    }

                    if (!isOverlapping) {
                        validPosition = true;
                    }
                }
                
                if (!validPosition) {
                    x = Math.max(padding, Math.min(x, width - spaceSize - padding));
                    y = Math.max(padding, Math.min(y, height - spaceSize - padding));
                }

                coords.push({ x, y });
            }
            return coords;
        }


        // Cria e desenha o tabuleiro
        function createBoard() {
            gameBoard.innerHTML = '';
            game.spaces = [];
            
            const boardWidth = gameBoard.clientWidth;
            const boardHeight = gameBoard.clientHeight;
            const spaceCoords = generateIrregularPathCoords(game.boardSize, boardWidth, boardHeight);
            
            const spaceTypes = game.spaceTypes;
            
            gameBoard.className = `map-${game.selectedMap}`;
            gameBoard.classList.add('rounded-xl', 'shadow-lg');

            for (let i = 0; i < game.boardSize; i++) {
                const space = document.createElement('div');
                space.className = 'board-space';
                space.id = `space-${i}`;
                space.textContent = i + 1;
                space.style.left = `${spaceCoords[i].x}px`;
                space.style.top = `${spaceCoords[i].y}px`;

                const type = spaceTypes[i];
                if (type === 'bonus') {
                    space.classList.add('bonus-space');
                    space.style.backgroundImage = game.currentMapTheme.bonusImage;
                } else if (type === 'challenge') {
                    space.classList.add('challenge-space');
                    space.style.backgroundImage = game.currentMapTheme.challengeImage;
                } else if (type === 'boss') {
                    space.classList.add('dragon-space');
                    space.style.backgroundImage = game.currentMapTheme.bossImage;
                } else if (type === 'mini-boss') {
                    space.classList.add('mini-boss-space');
                }

                game.spaces.push({ element: space, type: type });
                gameBoard.appendChild(space);
            }
        }
        
        // Gera posições aleatórias para bônus, desafios e mini-bosses
        function generateRandomSpaces(boardSize) {
            const types = Array(boardSize).fill('normal');
            const bonusCount = Math.floor(boardSize / 5);
            const challengeCount = Math.floor(boardSize / 7);
            
            const shuffledIndices = Array.from({ length: boardSize - 2 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

            for (let i = 0; i < bonusCount && shuffledIndices.length > 0; i++) {
                types[shuffledIndices.pop()] = 'bonus';
            }
            for (let i = 0; i < challengeCount && shuffledIndices.length > 0; i++) {
                types[shuffledIndices.pop()] = 'challenge';
            }

            types[shuffledIndices.pop()] = 'boss';
            
            let miniBossCount = 0;
            if (game.difficulty === 'medium') {
                miniBossCount = 1;
            } else if (game.difficulty === 'hard') {
                miniBossCount = 2;
            }

            for (let i = 0; i < miniBossCount && shuffledIndices.length > 0; i++) {
                types[shuffledIndices.pop()] = 'mini-boss';
            }
            
            return types;
        }

        // Desenha as peças dos jogadores no tabuleiro
        function renderPlayers() {
            game.players.forEach((player, index) => {
                let piece = document.getElementById(`player-piece-${index}`);
                if (!piece) {
                    piece = document.createElement('div');
                    piece.className = 'player-piece';
                    piece.id = `player-piece-${index}`;
                    const playerClass = game.classes.find(c => c.name === player.baseClass.name);
                    piece.textContent = playerClass.emoji;
                    gameBoard.appendChild(piece);
                }
                updatePiecePosition(piece, player.position, index);
            });
        }
        
        // Atualiza a posição visual da peça
        function updatePiecePosition(piece, position, playerIndex) {
            if (!game.spaces[position] || !game.spaces[position].element) return;
            const targetSpace = game.spaces[position].element;
            
            const playerOffset = (playerIndex % 4) * 5;
            
            const pieceX = targetSpace.offsetLeft + (targetSpace.offsetWidth / 2) + playerOffset;
            const pieceY = targetSpace.offsetTop + (targetSpace.offsetHeight / 2) + playerOffset;
            
            piece.style.left = `${pieceX}px`;
            piece.style.top = `${pieceY}px`;
            piece.style.transform = `translate(-50%, -50%)`;
        }

        // Inicia o turno do jogador atual
        async function playTurn() {
            const currentPlayer = game.players[game.currentPlayerIndex];
            rollDiceBtn.disabled = true;
            await new Promise(resolve => setTimeout(resolve, 1000));
            rollDice();
        }

        // Lança o dado e move o jogador
        function rollDice() {
            rollDiceBtn.disabled = true;
            diceResultDiv.textContent = '';
            const dice = document.getElementById('dice');
            dice.className = 'dice';
            void dice.offsetWidth;
            dice.classList.add('rolling');

            setTimeout(() => {
                dice.classList.remove('rolling');
                const roll = Math.floor(Math.random() * 6) + 1;

                let showClass = 'show-face-1';
                switch (roll) {
                    case 1: showClass = 'show-face-1'; break;
                    case 2: showClass = 'show-face-2'; break;
                    case 3: showClass = 'show-face-3'; break;
                    case 4: showClass = 'show-face-4'; break;
                    case 5: showClass = 'show-face-5'; break;
                    case 6: showClass = 'show-face-6'; break;
                }
                dice.classList.add(showClass);
                diceResultDiv.textContent = roll;

                const currentPlayer = game.players[game.currentPlayerIndex];
                const oldPosition = currentPlayer.position;
                const newPosition = Math.min(oldPosition + roll, game.boardSize - 1);
                
                addLogEntry(`${currentPlayer.name} rolou ${roll} e se moveu para a casa ${newPosition + 1}.`);
                
                movePiece(currentPlayer, oldPosition, newPosition);
            }, 1500);
        }

        // Anima o movimento da peça no tabuleiro
        async function movePiece(player, oldPos, newPos) {
            const piece = document.getElementById(`player-piece-${game.players.indexOf(player)}`);
            for (let i = oldPos + 1; i <= newPos; i++) {
                updatePiecePosition(piece, i, game.players.indexOf(player));
                player.position = i;
                await new Promise(resolve => setTimeout(resolve, 300));
            }
            
            await handleSpaceEvent(player);

            if (player.position !== game.boardSize -1) {
                endTurn();
            } else {
                 checkWinCondition(player);
            }
        }
        
        // Lida com eventos de desafio, bônus, mini-boss e boss
        async function handleSpaceEvent(player) {
            const spaceType = game.spaces[player.position].type;
            
            const playersOnSpace = game.players.filter(p => p.position === player.position && p !== player);

            if (spaceType === 'boss') {
                if (playerWaitingForBoss) {
                    await showBossConflict([playerWaitingForBoss, player]);
                    playerWaitingForBoss = null;
                } else {
                    await handleBossChoice(player);
                }
                return;
            }

            if (spaceType === 'mini-boss') {
                await showMiniBossConflict(player, game.currentMapTheme.miniBoss);
                return;
            }

            if (playersOnSpace.length > 0 && player.position !== 0) {
                const opponent = playersOnSpace[0];
                await showPlayerConflict(player, opponent);
                return;
            }

            if (spaceType === 'bonus') {
                const randomBonus = game.currentMapTheme.bonusStories[Math.floor(Math.random() * game.currentMapTheme.bonusStories.length)];
                player.trophies++;
                checkPromotion(player);
                addLogEntry(`${player.name} pousou em uma casa de Bônus. ${randomBonus.text}`);
                if (randomBonus.steps > 0) {
                    const newPos = Math.min(player.position + randomBonus.steps, game.boardSize - 1);
                    player.position = newPos;
                    const piece = document.getElementById(`player-piece-${game.players.indexOf(player)}`);
                    updatePiecePosition(piece, player.position, game.players.indexOf(player));
                }
                if (!player.isAI) {
                    showCard({ title: 'Bônus!', description: randomBonus.text, image: randomBonus.image });
                }
            } else if (spaceType === 'challenge') {
                const randomChallenge = game.currentMapTheme.challengeStories[Math.floor(Math.random() * game.currentMapTheme.challengeStories.length)];
                addLogEntry(`${player.name} pousou em uma casa de Desafio. ${randomChallenge.text}`);
                player.position = Math.max(0, player.position - randomChallenge.steps);
                const piece = document.getElementById(`player-piece-${game.players.indexOf(player)}`);
                updatePiecePosition(piece, player.position, game.players.indexOf(player));
                if (!player.isAI) {
                    showCard({ title: 'Desafio!', description: randomChallenge.text, image: randomChallenge.image });
                }
            }
        }
        
        // Mostra o cartão de evento com animação e temporizador
        function showCard(info) {
            const cardImage = document.getElementById('card-image');
            cardTitle.textContent = info.title;
            cardDescription.textContent = info.description;

            if (info.image) {
                cardImage.src = info.image;
                cardImage.classList.remove('hidden');
            } else {
                cardImage.classList.add('hidden');
            }

            cardPopup.classList.remove('hidden');
            rollDiceBtn.disabled = true;
            
            setTimeout(() => {
                cardPopup.classList.add('hidden');
            }, 3000);
        }

        // Lida com a promoção de classe
        function checkPromotion(player) {
            if (player.trophies >= game.promotionTrophies && !player.isPromoted) {
                const promotedName = player.baseClass.promoted;
                const promotedStats = game.promotedClasses[promotedName];
                
                player.class = promotedName;
                player.stats = promotedStats;
                player.isPromoted = true;
                player.image = promotedStats.image;

                addLogEntry(`${player.name} foi promovido a ${promotedName}!`);
                if (!player.isAI) {
                    showMessage(`Parabéns, ${player.name}! Você foi promovido a ${promotedName}!`, 5000);
                }
            }
        }

        // Lógica de decisão para IA em conflitos
        function handleAIConflictDecision(aiPlayer, opponent) {
            if (game.difficulty === 'easy') {
                return 'peace';
            } else if (game.difficulty === 'medium') {
                return Math.random() > 0.5 ? 'conflict' : 'peace';
            } else if (game.difficulty === 'hard') {
                const aiWins = 
                    (aiPlayer.stats.atk > opponent.stats.atk) +
                    (aiPlayer.stats.def > opponent.stats.def) +
                    (aiPlayer.stats.mana > opponent.stats.mana);
                
                if (aiWins >= 2) {
                    return 'conflict';
                } else {
                    return 'peace';
                }
            }
        }

        // Mostra a tela de conflito entre jogadores
        function showPlayerConflict(player, opponent) {
            return new Promise(resolve => {
                conflictScreen.classList.remove('hidden');
                document.getElementById('conflict-player-card').style.display = 'flex';
                document.getElementById('conflict-opponent-card').style.display = 'flex';
                conflictTitle.textContent = `Conflito - ${player.name} VS ${opponent.name}`;
                
                document.getElementById('conflict-player-img').src = player.image;
                document.getElementById('conflict-player-img').alt = `Imagem de ${player.name}`;
                document.getElementById('conflict-player-name').textContent = player.name;
                document.getElementById('conflict-player-atk').textContent = player.stats.atk;
                document.getElementById('conflict-player-def').textContent = player.stats.def;
                document.getElementById('conflict-player-mana').textContent = player.stats.mana;

                document.getElementById('conflict-opponent-img').src = opponent.image;
                document.getElementById('conflict-opponent-img').alt = `Imagem de ${opponent.name}`;
                document.getElementById('conflict-opponent-name').textContent = opponent.name;
                document.getElementById('conflict-opponent-atk').textContent = opponent.stats.atk;
                document.getElementById('conflict-opponent-def').textContent = opponent.stats.def;
                document.getElementById('conflict-opponent-mana').textContent = opponent.stats.mana;
                
                document.getElementById('conflict-result').textContent = '';
                closeConflictBtn.classList.add('hidden');
                
                const closeConflict = () => {
                    hideConflictScreen();
                    resolve();
                };

                if (player.isAI) {
                    document.getElementById('conflict-buttons').classList.add('hidden');
                    const decision = handleAIConflictDecision(player, opponent);
                    setTimeout(() => {
                        if (decision === 'peace') {
                            document.getElementById('conflict-result').textContent = `${player.name} (IA) escolheu a paz com ${opponent.name}.`;
                        } else {
                            resolveConflict(player, opponent);
                        }
                        setTimeout(() => closeConflict(), 3000);
                    }, 2000);
                } else {
                    document.getElementById('conflict-buttons').classList.remove('hidden');
                    
                    const timer = setTimeout(() => {
                        document.getElementById('conflict-result').textContent = 'Tempo esgotado! Ação padrão: Paz.';
                        peaceBtn.disabled = true;
                        conflictBtn.disabled = true;
                        setTimeout(() => closeConflict(), 3000);
                    }, 10000);

                    peaceBtn.onclick = () => {
                        clearTimeout(timer);
                        document.getElementById('conflict-result').textContent = `${player.name} escolheu a paz.`;
                        document.getElementById('conflict-buttons').classList.add('hidden');
                        setTimeout(() => closeConflict(), 3000);
                    };

                    conflictBtn.onclick = () => {
                        clearTimeout(timer);
                        resolveConflict(player, opponent);
                        document.getElementById('conflict-buttons').classList.add('hidden');
                        setTimeout(() => closeConflict(), 3000);
                    };
                }
            });
        }
        
        function resolveConflict(player, opponent) {
            const playerWins = 
                (player.stats.atk > opponent.stats.atk) +
                (player.stats.def > opponent.stats.def) +
                (player.stats.mana > opponent.stats.mana);
            
            const opponentWins = 
                (opponent.stats.atk > player.stats.atk) +
                (opponent.stats.def > player.stats.def) +
                (opponent.stats.mana > player.stats.mana);

            if (playerWins >= 2) {
                document.getElementById('conflict-result').textContent = `${player.name} venceu! ${opponent.name} retrocede uma casa e perde um troféu.`;
                opponent.position = Math.max(0, opponent.position - 1);
                opponent.trophies = Math.max(0, opponent.trophies - 1);
                player.trophies++;
                checkPromotion(player);
                const opponentPiece = document.getElementById(`player-piece-${game.players.indexOf(opponent)}`);
                updatePiecePosition(opponentPiece, opponent.position, game.players.indexOf(opponent));
            } else if (opponentWins >= 2) {
                document.getElementById('conflict-result').textContent = `${opponent.name} venceu! ${player.name} retrocede uma casa e perde um troféu.`;
                player.position = Math.max(0, player.position - 1);
                player.trophies = Math.max(0, player.trophies - 1);
                opponent.trophies++;
                checkPromotion(opponent);
                const playerPiece = document.getElementById(`player-piece-${game.players.indexOf(player)}`);
                updatePiecePosition(playerPiece, player.position, game.players.indexOf(player));
            } else {
                document.getElementById('conflict-result').textContent = 'Empate! Ninguém se move ou perde/ganha troféus.';
            }
        }
        
        // Lida com a escolha do Boss (lutar ou esperar)
        function handleBossChoice(player, choice = null) {
            return new Promise(resolve => {
                if (player.isAI) {
                    const aiChoice = game.difficulty === 'hard' ? 'fight' : 'wait';
                    if (aiChoice === 'fight') {
                        addLogEntry(`${player.name} (IA) ousou lutar sozinho contra o Boss!`);
                        player.position = 0; // "Morre"
                        const piece = document.getElementById(`player-piece-${game.players.indexOf(player)}`);
                        updatePiecePosition(piece, player.position, game.players.indexOf(player));
                        resolve();
                    } else {
                        addLogEntry(`${player.name} (IA) decidiu esperar por um aliado na casa do Boss.`);
                        playerWaitingForBoss = player;
                        resolve();
                    }
                } else {
                    bossChoicePopup.classList.remove('hidden');
                    
                    const handleChoice = (selectedChoice) => {
                        bossChoicePopup.classList.add('hidden');
                        if (selectedChoice === 'fight') {
                            addLogEntry(`${player.name} ousou lutar sozinho contra o Boss!`);
                            player.position = 0;
                            const piece = document.getElementById(`player-piece-${game.players.indexOf(player)}`);
                            updatePiecePosition(piece, player.position, game.players.indexOf(player));
                        } else {
                            addLogEntry(`${player.name} decidiu esperar por um aliado na casa do Boss.`);
                            playerWaitingForBoss = player;
                        }
                        resolve();
                    };

                    bossFightAloneBtn.onclick = () => handleChoice('fight');
                    bossWaitBtn.onclick = () => handleChoice('wait');
                }
            });
        }

        // Lida com a batalha em equipe contra o Boss final
        async function showBossConflict(players) {
            return new Promise(resolve => {
                conflictScreen.classList.remove('hidden');
                conflictTitle.textContent = `Batalha contra ${game.currentMapTheme.boss.name}!`;

                // Cria as imagens dos jogadores da aliança
                const allianceImagesHTML = players.map(p => 
                    `<img class="stat-card-image" src="${p.image}" alt="Imagem de ${p.name}">`
                ).join('');

                document.getElementById('conflict-player-card').style.display = 'none';
                document.getElementById('conflict-opponent-card').style.display = 'none';
                
                document.getElementById('conflict-details').innerHTML = `
                    <div class="stat-card">
                        <div class="alliance-image-container">
                            ${allianceImagesHTML}
                        </div>
                        <h4>Aliança dos Jogadores</h4>
                        <p>Ataque: <span id="team-atk"></span></p>
                        <p>Defesa: <span id="team-def"></span></p>
                        <p>Estamina: <span id="team-mana"></span></p>
                    </div>
                    <div class="text-4xl font-bold mt-8">VS</div>
                    <div class="stat-card">
                        <img class="stat-card-image" src="${game.currentMapTheme.boss.image}" alt="Imagem do Boss">
                        <h4>${game.currentMapTheme.boss.name}</h4>
                        <p>Ataque: <span>${game.currentMapTheme.boss.stats.atk}</span></p>
                        <p>Defesa: <span>${game.currentMapTheme.boss.stats.def}</span></p>
                        <p>Estamina: <span>${game.currentMapTheme.boss.stats.mana}</span></p>
                    </div>
                `;

                const combinedStats = { atk: 0, def: 0, mana: 0 };
                players.forEach(p => {
                    combinedStats.atk += p.stats.atk;
                    combinedStats.def += p.stats.def;
                    combinedStats.mana += p.stats.mana;
                });

                document.getElementById('team-atk').textContent = combinedStats.atk;
                document.getElementById('team-def').textContent = combinedStats.def;
                document.getElementById('team-mana').textContent = combinedStats.mana;

                document.getElementById('conflict-result').textContent = 'A Batalha está prestes a começar!';
                document.getElementById('conflict-buttons').classList.add('hidden');
                
                setTimeout(() => {
                    const playersWins = 
                        (combinedStats.atk > game.currentMapTheme.boss.stats.atk) +
                        (combinedStats.def > game.currentMapTheme.boss.stats.def) +
                        (combinedStats.mana > game.currentMapTheme.boss.stats.mana);
                    
                    let battleResult = '';
                    if (playersWins >= 2) {
                        battleResult = `A aliança venceu o ${game.currentMapTheme.boss.name}!`;
                        addLogEntry(`A aliança de ${players.map(p => p.name).join(' e ')} venceu o ${game.currentMapTheme.boss.name}! Todos avançam 5 casas!`);
                        players.forEach(p => {
                            p.position = Math.min(p.position + 5, game.boardSize - 1);
                            const piece = document.getElementById(`player-piece-${game.players.indexOf(p)}`);
                            updatePiecePosition(piece, p.position, game.players.indexOf(p));
                        });
                    } else {
                        battleResult = `A aliança falhou em derrotar o ${game.currentMapTheme.boss.name}!`;
                        addLogEntry(`A aliança de ${players.map(p => p.name).join(' e ')} falhou. Todos retrocedem 15 casas!`);
                        players.forEach(p => {
                            p.position = Math.max(0, p.position - 15);
                            const piece = document.getElementById(`player-piece-${game.players.indexOf(p)}`);
                            updatePiecePosition(piece, p.position, game.players.indexOf(p));
                        });
                    }
                    
                    document.getElementById('conflict-result').textContent = battleResult;

                    // CORREÇÃO DO BUG: garante que a tela fechará e a promessa será resolvida.
                    setTimeout(() => {
                        hideConflictScreen();
                        resolve(); // Resolve a promessa para o jogo continuar
                    }, 4000); // Tempo para ler o resultado final

                }, 3000); // Tempo para o início da batalha
            });
        }
        
        // Lida com a batalha contra um Mini-Boss
        async function showMiniBossConflict(player, miniBoss) {
            return new Promise(resolve => {
                conflictScreen.classList.remove('hidden');
                document.getElementById('conflict-player-card').style.display = 'flex';
                document.getElementById('conflict-opponent-card').style.display = 'flex';
                document.getElementById('conflict-details').style.display = 'flex'; // Garante que está visível
                conflictTitle.textContent = `Batalha contra o Mini-Boss: ${miniBoss.name}!`;
                document.getElementById('conflict-buttons').classList.add('hidden');

                document.getElementById('conflict-player-img').src = player.image;
                document.getElementById('conflict-player-img').alt = `Imagem de ${player.name}`;
                document.getElementById('conflict-player-name').textContent = player.name;
                document.getElementById('conflict-player-atk').textContent = player.stats.atk;
                document.getElementById('conflict-player-def').textContent = player.stats.def;
                document.getElementById('conflict-player-mana').textContent = player.stats.mana;
                
                document.getElementById('conflict-opponent-img').src = miniBoss.image;
                document.getElementById('conflict-opponent-img').alt = `Imagem do ${miniBoss.name}`;
                document.getElementById('conflict-opponent-name').textContent = miniBoss.name;
                document.getElementById('conflict-opponent-atk').textContent = miniBoss.stats.atk;
                document.getElementById('conflict-opponent-def').textContent = miniBoss.stats.def;
                document.getElementById('conflict-opponent-mana').textContent = miniBoss.stats.mana;
                
                setTimeout(() => {
                    const playerWins = 
                        (player.stats.atk > miniBoss.stats.atk) +
                        (player.stats.def > miniBoss.stats.def) +
                        (player.stats.mana > miniBoss.stats.mana);
                    
                    if (playerWins >= 2) {
                        document.getElementById('conflict-result').textContent = `Você venceu o Mini-Boss! Avance 3 casas.`;
                        player.position = Math.min(player.position + 3, game.boardSize - 1);
                        const piece = document.getElementById(`player-piece-${game.players.indexOf(player)}`);
                        updatePiecePosition(piece, player.position, game.players.indexOf(player));
                    } else {
                        document.getElementById('conflict-result').textContent = `Você foi derrotado! Retroceda 5 casas.`;
                        player.position = Math.max(0, player.position - 5);
                        const piece = document.getElementById(`player-piece-${game.players.indexOf(player)}`);
                        updatePiecePosition(piece, player.position, game.players.indexOf(player));
                    }
                    setTimeout(() => {
                        hideConflictScreen();
                        resolve();
                    }, 5000);
                }, 3000);
            });
        }


        // Esconde a tela de conflito
        function hideConflictScreen() {
            conflictScreen.classList.add('hidden');
        }

        // Verifica se o jogador venceu
        function checkWinCondition(player) {
            if (player.position === game.boardSize - 1) {
                document.getElementById('winner-name').textContent = `${player.name} venceu a queda dos reinos!`;
                showScreen('win');
            }
        }

        // Finaliza o turno e passa a vez
        function endTurn() {
            game.currentPlayerIndex = (game.currentPlayerIndex + 1) % game.players.length;
            updateDisplay();
            
            const currentPlayer = game.players[game.currentPlayerIndex];
            if (currentPlayer.isAI) {
                rollDiceBtn.disabled = true;
                setTimeout(() => playTurn(), 2000);
            } else {
                rollDiceBtn.disabled = false;
            }
        }

        // Atualiza as informações na tela
        function updateDisplay() {
            const currentPlayer = game.players[game.currentPlayerIndex];
            turnInfo.textContent = `Vez de: ${currentPlayer.name}`;
            
            const playerListDiv = document.getElementById('player-list');
            playerListDiv.innerHTML = game.players.map(p => {
                const isCurrent = p.name === currentPlayer.name ? 'font-bold' : '';
                return `<div class="${isCurrent}">${p.name} (${p.class}): ${p.trophies} Troféus</div>`;
            }).join('');
        }
        
        // Inicia o jogo ao carregar a página
        window.onload = function() {
            createPlayerSetup();
            showScreen('main');
        };

        // Redesenha o tabuleiro se a janela for redimensionada
        window.addEventListener('resize', () => {
            if (gameScreen.style.display !== 'none') {
                createBoard();
                renderPlayers();
            }
        });