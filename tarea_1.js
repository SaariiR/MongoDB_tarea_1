//SARA RODRIGUEZ SOTO  a262002

//Cuantos registros arrojo el comando count?
  
  db.grades.count();
  
// Respuesta : 800  
 
// Encuentra todas las calificaciones del estudiante con el id numero 4 

   db.grades.find({"student_id":4});

//Respuesta: 87.89071881934647 , 28.656451042441 , 27.29006335059361 , 5.244452510818443

// ¿Cuantos registros hay de tipo exam?  
    db.grades.count({"type":"exam"}); 
  //Respuesta : 200
  
// ¿Cuantos registros hay de tipo homework?
    db.grades.count({"type":"homework"});
	// Respuesta : 400
	
// ¿Cuantos registros hay de tipo quiz?
   db.grades.count({"type":"quiz"});
    // Respuesta : 200
	
// Elimina todas las calificaciones del estudiante con el id numero 3
     db.grades.remove({"student_id":4});
   //Respuesta: writeResult({"nRemoved":4})
   
// ¿Que estudiantes obtuvieron 75.29561445722392 en una tarea ?
   db.grades.find({"score":75.29561445722392});
   //Respuesta: "student_id" : 9
   
// Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100 
   db.grades.update({"_id" : ObjectId("50906d7fa3c412bb040eb591")} , {$set:{"score": 100}});
   //Respuesta: writeResult({"nMatched": 1, "nUpserted": 0, "nModified": 1})
   // Para verificar que si cambio la calificacion : 
       db.grades.find({"_id" : ObjectId("50906d7fa3c412bb040eb591")});
	   //Respuesta: {"_id":ObjectId("50906d7fa3c412bb040eb591"), "student_id": 6, "type":"homework","score": 100}

// A que estudiante pertenece esta calificación.
   db.grades.find({"_id" : ObjectId("50906d7fa3c412bb040eb591")});
   // Respuesta : "student": 6
   
