import fs from 'fs' 

// Create file
// fs.appendFile("nouveauFichier.txt", "Mon contenu", function (err) {
//   if (err) throw err;
//   console.log("Fichier créé !");
// });

// // Open File znd Modify it
// // 'r' : Ouvre le fichier en mode lecture. Le fichier doit exister, sinon une erreur sera générée.
// // 'w' : Ouvre le fichier en mode écriture. Si le fichier n'existe pas, il sera créé. Si le fichier existe, il sera tronqué (le contenu sera effacé).
// // 'a' : Ouvre le fichier en mode ajout (append). Si le fichier n'existe pas, il sera créé. Si le fichier existe, le nouveau contenu sera ajouté à la fin.

// fs.open("nouveauFichier.txt", "a", function (err, file) {
//     if (err) throw err;
//     console.log("Fichier ouvert en mode ajout !");
    
//     // Vous pouvez maintenant utiliser `file` pour écrire dans le fichier.
    
//     // Par exemple, pour ajouter du texte à ce fichier :
//     fs.appendFile(file, "Nouveau contenu ajouté test.", function (err) {
//       if (err) throw err;
//       console.log("Contenu ajouté avec succès !");
      
//       // Fermeture du fichier après écriture
//       fs.close(file, function (err) {
//         if (err) throw err;
//         console.log("Fichier fermé avec succès !");
//       });
//     });
//   });

  // MODIFIER UN FICHIER
//  fs.writeFile("nouveauFichier.txt", "WRITEFILETEST", function (err) {
//    if (err) throw err;
//    console.log("Fichier créé !");
//  });

// Lire Un Fichier
fs.readFile("nouveauFichier.txt", "utf8", function (err, data) {
  const content = data;
  console.log(content);
});