var english,sindhi,pst,chemistry,biocomp ;

english = 30 ;
sindhi = 43 ;
pst = 45 ;
chemistry = 40 ;
biocomp = 42 ;

var totalmarks = 250;

var totalobtained = english+sindhi+pst+chemistry+biocomp;

var percentage = ( totalobtained/250 ) *100 ;


var obeng = document.getElementById ('obeng') ;
obeng.textContent = english ;


var obsin = document.getElementById ('obsin') ;
obsin.textContent = sindhi ;


var obpst = document.getElementById ('obpst') ;
obpst.textContent = pst ;


var obchem = document.getElementById ('obchem') ;
obchem.textContent = chemistry ;


var obbc = document.getElementById ('obbc') ;
obbc.textContent = biocomp ;


var obtotal = document.getElementById ('obtotal') ;
obtotal.textContent = totalobtained ;



var pertotal = document.getElementById ('pertotal') ;
pertotal.textContent = percentage +'%' ;


var pereng = document.getElementById ('pereng') ;
perengl = (english/50)*100 ;
pereng.textContent = perengl+'%' ;



var persin = document.getElementById ('persin') ;
persind = (sindhi/50)*100 ;
persin.textContent = persind+'%' ;




var perpst = document.getElementById ('perpst') ;
perp_st = (pst/50)*100 ;
perpst.textContent = perp_st+'%' ;



var perchem = document.getElementById ('perchem') ;
perchemi = (english/50)*100 ;
perchem.textContent = perchemi+'%' ;



var perbc = document.getElementById ('perbc') ; 
perbico = (biocomp/50)*100 ;
perbc.textContent = perbico+'%' ;