const notes = [
    {
        course: "Cocina con Teresita",
        note: 10,
        credits: 2,
    },
    {
        course: "Exploracion espacial II",
        note: 9,
        credits: 4,
    },
    {
        course: "Microbiologia zoombie",
        note: 5,
        credits: 1,
    },
];

const notesWithCredits = notes.map(
    function(notesObject){
        return  notesObject.note * notesObject.credits;
    }
);
const sumOfNotesWithCredits = notesWithCredits.reduce(
    function (sum = 0,  newVal){
        return sum + newVal;
    }
);

const credits = notes.map(
    function(notesObject){
        return notesObject.credits;
    }
);
const sumOfCredits = credits.reduce(
    function(sum = 0, newVal){
        return sum + newVal;
    }
);

const promedioPonderadoNotasSobreCreditos = sumOfNotesWithCredits / sumOfCredits;
