const initialJob = {
    arrJob: [
        {
            url: "../../img/Champ.png",
            name: "Champ"
        },
        {
            url: "../../img/Assa.png",
            name: "Assa"
        },
        {
            url: "../../img/Bio.png",
            name: "Bio"
        },
        {
            url: "../../img/HightPri.png",
            name: "HightPri"
        },
        {
            url: "../../img/Ninja.png",
            name: "Ninja"
        },
        {
            url: "../../img/Paladin.png",
            name: "Paladin"
        },
        {
            url: "../../img/Sco.png",
            name: "Sco"
        },
        {
            url: "../../img/Sniper.png",
            name: "Sniper"
        },
        {
            url: "../../img/Sword.png",
            name: "Sword"
        }
    ]
}

export const JobReducer = (state = initialJob, action) => {
    switch (action.type) {
        default:
            return { ...state }
    }
}