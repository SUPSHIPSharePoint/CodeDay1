(function () { 
    console.log("IIFE");

    var conditionalFormattingContext = {}; 
    conditionalFormattingContext.Templates = {}; 
    conditionalFormattingContext.Templates.Fields = { 
        "Score_x0020_Cost_x0020_Avoidance": 	{ "View": conditionalFormattingTemplate },
        "Score_x0020_Schedule_x0020_Impac": 	{ "View": conditionalFormattingTemplate },	
        "Score_x0020_Quality_x0020_Of_x00": 	{ "View": conditionalFormattingTemplate } 
    }; 

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(conditionalFormattingContext); 
})(); 
 
function conditionalFormattingTemplate(ctx) { 
    var currentItem = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
    console.log("currentItem = " + currentItem);

    // Return html element with appropriate color based on currentItem value 
    switch (currentItem) { 
        case "1": 
            return "<span style='color :#FF0000'>" + currentItem + "</span>"; 
            break; 
        case "2": 
            return "<span style='color :#00FF00'>" + currentItem + "</span>"; 
            break; 
        case "3": 
            return "<span style='color :#0000FF'>" + currentItem + "</span>"; 
    } 
}  	
 