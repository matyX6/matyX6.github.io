import {ToolData} from '../data/toolData.js';

class Project
{
    constructor(title, imageSrc, imageDataSrc, descriptions, responsibilityTitle, responsibilities, developmentTime, tools, links)
    {
        this.title = title;
        this.imageSrc = imageSrc;
        this.imageDataSrc = imageDataSrc;
        this.descriptions = descriptions;
        this.responsibilityTitle = responsibilityTitle;
        this.responsibilities = responsibilities;
        this.developmentTime = developmentTime;
        this.tools = tools;
        this.links = links;
    }
}

export class ProjectData
{
    static Games =
    [
        new Project
        (
            'Kick League',
            './assets/klps.webp',
            './assets/klp.webp',
            [
                'Fast-paced, retro-styled, arcade multiplayer balling game! Featuring PvP and solo gameplay.',
            ],
            'Features I implemented:',
            [
                'Robust state machine'
            ],
            '1 year, 2 months',
            [
                ToolData.Unity,
                ToolData.CSharp,
                ToolData.Netcode,
                ToolData.Git,
                ToolData.Affinity
            ],
            [
                {url: 'https://www.youtube.com/watch?v=rRJOZeQzzzc', text: 'Video'}
            ]
        ),

        new Project
        (
            'PHAGEBORN: Online Card Game',
            './assets/phas.webp',
            './assets/pha.webp',
            [
                'Immersive online card game which combines rich and engaging storytelling with deep and strategic gameplay.'
            ],
            'Features I implemented:',
            [
            ],
            '7 months',
            [
                ToolData.Unity,
                ToolData.CSharp,
                ToolData.Git
            ],
            [
                {url: 'https://store.steampowered.com/app/1037990/PHAGEBORN_Online_Card_Game/', text: 'Steam'},
                {url: 'https://www.youtube.com/watch?v=qEAvwwXACf8', text: 'Video'},
            ]
        ),

        new Project
        (
            'Survival Game #1',
            './assets/sg1.webp',
            '',
            [
                'Science-fantasy, online survival first-person shooter set in a unique tropical world.',
            ],
            'Some of the features and responsibilities:',
            [
                'Abstract input management interface that works with any input system asset.',
                'Games input management with Rewired third party asset.',
                'Advanced priority based input management system that handles different screens and game states.',
                'Editor tool for a priority based input management.',
                'Settings Input management remapping.',
                'Adapted character controller to work with new input system.',
                'TV and radio interactable object behaviour, turning on and off, showing picture and playing sound.',
                'Dialogue subtitle system.',
                'Written tutorial implementation and user interface.',
                'Status effect networking, slow, hungry, wet, high jump and similar.',
                'Status effect interactive user interface with radial duration bar.',
                'Settings implementation with General, Audio, Video and Control options.',
                'Initial setting user interface layout.',
                'Page based interactable objects like newspapers, diaries and their interactive user interface.',
                'Chat that is used for communication between players over network and its user interface.',
                'Some Steamworks features, like showing player name in chat and in game.',
                'Updated existing crafting logic.',
                'Update existing games localization asset with additional code and features.',
                'Robust character creation screen, utilizing 3D model deformation, blend shapes and UMA third party asset.',
                'Migrated some of the existing networked features from MLAPI to Photon Bolt networking solution.',
                'Existing building system overhaul, added new networked structures like pillar based wooden fence and gates.',
                'Existing interaction system overhaul and upgrades.',
                'AI enemies, created new enemies using behaviour trees and existing system',
                'Introduced more organic AI behaviour by implementing 3d model spine deformation asset.',
                'Overhauled most of the sea-world AI behaviour, added peaceful fish species as well as hostile predators.',
                'Centralized VFX system, reusing objects with the pooling system.',
                'Implemented game specific events like storms, world anomalies and player perception, dimension shifts.',
                'Networked and synced loading hundreds of objects used in the specific game events mentioned.',
                'Added tool repair user interface.',
                'User interface polish overhaul, player inventory, equipment, crafting, settings, and most of other menus.',
                'Since this was a multi year project, a lot of other small and big everyday challenges, changes and fixes.'
            ],
            '2 years',
            [
                ToolData.Unity,
                ToolData.CSharp,
                ToolData.Photon,
                ToolData.Perforce,
                ToolData.Git
            ],
            []
        ),

        new Project
        (
            'Survival Game #2',
            './assets/sg2.webp',
            '',
            [
                'Survival game with a playful twist, presented from a first-person shooter perspective.',
            ],
            'Some of the features and responsibilities:',
            [
                'First-Person player animation system, all states and transitions including sprint, reload, jump, idle, aim down sight and similar.',
                'Third-Person player animation system, all states and transitions including sprint, crouch, prone, jump and similar and similar.',
                'Animator Inverse-Kinematics',
                'Interaction system \"Press E to interact\".',
                'Networked Third-person animation system.',
                'Server-Authoritative movement with client side prediction.',
                'Lag-Compensation system for traveling projectiles.',
                'Input system and management',
                'Traveling projectiles math calculation and logic.',
                'Networked character stats like health and similar.',
                'Networked weapon reload, making sure player has ammo on server.',
                'Networked session scoreboard.',
                'Weapon characteristics system like power, recoil power, bullet spread and reload time.',
                'Weapon recoil and spread system, unique power and patterns for each weapon.',
                'Physics and collision maintenance.',
                'Attachment system that affects stats of a weapon, and user interface.',
                'Player equipment that affects player stats, and user interface.',
                'Camera Stacking, multiple camera layers and sniper optics.',
                'Crosshair, hit markers, hit sounds, headshot signalization and other shooting related polishes.',
                'Other game feel polishes like camera shake and similar.'
            ],
            '6 months',
            [
                ToolData.Unity,
                ToolData.CSharp,
                ToolData.Mlapi,
                ToolData.Git
            ],
            []
        ),

        new Project
        (
            'Action RPG Game #1',
            './assets/rpg1s.webp',
            './assets/rpg1.webp',
            [
                '3D isometric role-playing game that combines classic gameplay mechanics with immersive storytelling and horror-filled world.',
            ],
            'Some of the features and responsibilities:',
            [
                'Abstract NPC quest-line system with dialogue and objectives',
                'Interaction system "Press E to interact".',
                'Shop, merchant logic and user interface.',
                'Most of the games user interfaces like level selection, bars, timers and similar.',
                'Localization implementation.',
                'Passive ability, a pet that follows the player and attacks enemies.',
                'Timed events, other specific game behaviours and more.'
            ],
            '3 months',
            [
                ToolData.Unity,
                ToolData.CSharp,
                ToolData.Git
            ],
            []
        ),

        new Project
        (
            'Action RPG Game #2',
            './assets/rpg2s.webp',
            './assets/rpg2.webp',
            [
                'Dark fantasy role-playing game with a strong emphasis on combat against challenging enemies.',
            ],
            'Some of the features and responsibilities:',
            [
                'Player characters "free flow" combat system, with smooth transition between attacks and different combos.',
                'Combat accessibility features, like auto-aim for easier controller gameplay.',
                'Combat target switching.', 
                'Player input management.',
                'Player movement system, run, sprint, dodge and similar.',
                'Player attributes like health and stamina.',
                'Character animation controllers, for both player and enemies, using root motion.',
                'Prototyped initial enemy behaviour, worked with behaviour trees and AI navigation.',
                'Enemy projectile that damages player health, and applies physics impact pushing all the characters around.',
                'Visual enemy attack indicator.',
                'Attack blocking with shield.',
                'Attack visual effects implementation.',
            ],
            '3 months',
            [
                ToolData.Unreal,
                ToolData.CPlusPlus,
                ToolData.Perforce
            ],
            []
        ),

        new Project
        (
            'Prototypes',
            './assets/oths.webp',
            './assets/oth.webp',
            [
                'Some of my game projects were created purely for fun and experimentation. More details coming soon!'
            ],
            'Features I implemented:',
            [
            ],
            '2 years, 6 months',
            [
                ToolData.MixedTools
            ],
            [
                {url: 'https://youtu.be/pKm48l-cFgo?si=v6gDInr4Iq4c34Gu', text: 'Timecode'},
                {url: 'https://youtu.be/aRm2VTPR7DQ?si=rL5PXASp6zr4cpaW', text: 'Snake Colors'},
                {url: 'https://youtu.be/SNGuwE9SI9I?si=AmXg9Dysd2vneMzY', text: 'Planes'}
            ],
        )
    ];

    static Tools =
    [
        new Project
        (
            'FPS Multiplayer Backend',
            './assets/slcs.webp',
            './assets/slc.webp',
            [
                'Robust backend for FPS multiplayer games, featuring essential components for a fair and responsive online environment.',
            ],
            'Features I implemented:',
            [
            ],
            '2 months',
            [
                ToolData.Unity,
                ToolData.CSharp,
                ToolData.Mlapi,
                ToolData.Git
            ],
            []
        ),

        new Project
        (
            'Path Generation',
            './assets/ppgs.webp',
            './assets/ppg.webp',
            [
                'Reusable, grid-based procedural path generation algorithm, designed to create dynamic and efficient pathways.',
            ],
            'Features I implemented:',
            [
            ],
            '1 day',
            [
                ToolData.CSharp,
                ToolData.Git
            ],
            [
                {url: 'https://github.com/matyX6/path-gen', text: 'Source Code'}
            ]
        ),
    ];

    static Other =
    [
        new Project
        (
            'Homebound',
            './assets/homs.webp',
            './assets/hom.webp',
            [
                'Server-Client software that enables user to effortlessly create and manage a secure home server without a static IP.',
            ],
            'Features I implemented:',
            [
            ],
            '1 month',
            [
                ToolData.Bash,
                ToolData.Git
            ],
            [
                {url: 'https://github.com/matyX6/homebound', text: 'Source Code'}
            ]
        ),
        
        new Project
        (
            'Portfolio',
            './assets/pors.webp',
            '',
            [
                'This web application was developed and designed by me.',
            ],
            'Features I implemented:',
            [
            ],
            '1 month',
            [
                ToolData.Javascript,
                ToolData.Node,
                ToolData.Git
            ],
            [
            ]
        )
    ];

    static ArrayIds = 
    {
        games: this.Games,
        tools: this.Tools,
        other: this.Other
    };

    static GetArrayId(array) 
    {
        for (let key in this.ArrayIds) 
        {
            if (this.ArrayIds[key] === array) 
            {
                return key;
            }
        }
        return undefined;
    }

    static GetArrayById(id) 
    {
        return this.ArrayIds[id];
    }
}