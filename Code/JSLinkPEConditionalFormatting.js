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
            return "<img src='https://ih1.redbubble.net/image.106665970.4645/flat,40x40,075,f.u1.jpg'>"; 
            break; 
        case "2": 
            return "<img src='https://ih1.redbubble.net/image.127399649.0849/flat,40x40,075,t.u3.jpg'>"; 
            break; 
        case "3": 
            return "<img src='https://ih0.redbubble.net/image.185857483.9127/flat,40x40,075,f.u3.jpg'>"; 
    } 
}  	
 