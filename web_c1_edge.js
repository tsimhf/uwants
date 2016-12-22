/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'web_c1',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"web_c1.png",'50%','50%','100%','auto', 'no-repeat']
                        },
                        {
                            id: 'light2',
                            type: 'image',
                            rect: ['331px', '345px', '81px', '81px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"light2.png",'0px','0px']
                        },
                        {
                            id: 'light2Copy',
                            type: 'image',
                            rect: ['608px', '345px', '81px', '81px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"light2.png",'0px','0px']
                        },
                        {
                            id: 'light2Copy4',
                            type: 'image',
                            rect: ['539px', '345px', '81px', '81px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"light2.png",'0px','0px']
                        },
                        {
                            id: 'light2Copy3',
                            type: 'image',
                            rect: ['400px', '345px', '81px', '81px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"light2.png",'0px','0px']
                        },
                        {
                            id: 'light2Copy2',
                            type: 'image',
                            rect: ['470px', '345px', '81px', '81px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"light2.png",'0px','0px']
                        },
                        {
                            id: 'Pasted2',
                            type: 'image',
                            rect: ['382px', '366px', '258px', '152px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1000px', '580px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid171",
                            "left",
                            0,
                            0,
                            "linear",
                            "${light2Copy4}",
                            '539px',
                            '539px'
                        ],
                        [
                            "eid169",
                            "height",
                            0,
                            0,
                            "linear",
                            "${light2Copy4}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid128",
                            "width",
                            0,
                            0,
                            "linear",
                            "${light2}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid170",
                            "width",
                            0,
                            0,
                            "linear",
                            "${light2Copy4}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid165",
                            "width",
                            0,
                            0,
                            "linear",
                            "${light2Copy2}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid164",
                            "height",
                            0,
                            0,
                            "linear",
                            "${light2Copy2}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid127",
                            "height",
                            0,
                            0,
                            "linear",
                            "${light2}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid163",
                            "left",
                            0,
                            0,
                            "linear",
                            "${light2Copy3}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${light2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            3000,
                            1500,
                            "linear",
                            "${light2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid158",
                            "width",
                            0,
                            0,
                            "linear",
                            "${light2Copy3}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid157",
                            "height",
                            0,
                            0,
                            "linear",
                            "${light2Copy3}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid182",
                            "left",
                            0,
                            0,
                            "linear",
                            "${light2Copy}",
                            '608px',
                            '608px'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${light2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            3000,
                            1500,
                            "linear",
                            "${light2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid131",
                            "top",
                            0,
                            0,
                            "linear",
                            "${light2}",
                            '345px',
                            '345px'
                        ],
                        [
                            "eid175",
                            "width",
                            0,
                            0,
                            "linear",
                            "${light2Copy}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid174",
                            "height",
                            0,
                            0,
                            "linear",
                            "${light2Copy}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid33",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${light2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            3000,
                            1500,
                            "linear",
                            "${light2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid173",
                            "top",
                            0,
                            0,
                            "linear",
                            "${light2Copy4}",
                            '345px',
                            '345px'
                        ],
                        [
                            "eid122",
                            "left",
                            0,
                            0,
                            "linear",
                            "${light2}",
                            '331px',
                            '331px'
                        ],
                        [
                            "eid167",
                            "top",
                            0,
                            0,
                            "linear",
                            "${light2Copy2}",
                            '345px',
                            '345px'
                        ],
                        [
                            "eid54",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${light2Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            3000,
                            1500,
                            "linear",
                            "${light2Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid168",
                            "left",
                            0,
                            0,
                            "linear",
                            "${light2Copy2}",
                            '470px',
                            '470px'
                        ],
                        [
                            "eid161",
                            "top",
                            0,
                            0,
                            "linear",
                            "${light2Copy3}",
                            '345px',
                            '345px'
                        ],
                        [
                            "eid180",
                            "top",
                            0,
                            0,
                            "linear",
                            "${light2Copy}",
                            '345px',
                            '345px'
                        ],
                        [
                            "eid45",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${light2Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            3000,
                            1500,
                            "linear",
                            "${light2Copy3}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("web_c1_edgeActions.js");
})("EDGE-734831");
