document.write("<table border=1 bordercollapse style=border-collapse:collapse>");
  document.write("<tr>");
    document.write("<td><strong>Nombre del codigo del navegador:</strong></td>");
    document.write("<td>"+navigator.appCodeName+"</td>");
  document.write("</tr>");
  document.write("<tr>");
    document.write("<td><strong>Nombre del navegador:</strong></td>");
    document.write("<td>"+navigator.appName+"</td>");
  document.write("</tr>");
  document.write("<tr>");
    document.write("<td><strong>Informacion del navegador:</strong></td>");
    document.write("<td>"+navigator.appVersion+"</td>");
  document.write("</tr>");
  document.write("<tr>");
    document.write("<td><strong>Cookies activas:</strong></td>");
    document.write("<td>"+navigator.cookieEnabled+"</td>");
  document.write("</tr>");
  document.write("<tr>");
    document.write("<td><strong>Geolocalización:</strong></td>");
    document.write("<td>"+navigator.geolocation+"</td>");
  document.write("</tr>");
  document.write("<tr>");
    document.write("<td><strong>Idioma:</strong></td>");
    document.write("<td>"+navigator.language+"</td>");
  document.write("</tr>");
  document.write("<tr>");
    document.write("<td><strong>En Linea:</strong></td>");
    document.write("<td>"+navigator.onLine+"</td>");
  document.write("</tr>");
  document.write("<tr>");
    document.write("<td><strong>Plataforma del navegador:</strong></td>");
    document.write("<td>"+navigator.platform+"</td>");
  document.write("</tr>");
  document.write("<tr>");
    document.write("<td><strong>El motor del navegador:</strong></td>");
    document.write("<td>"+navigator.product+"</td>");
  document.write("</tr>");
  document.write("<tr>");
    document.write("<td><strong>Nombre del agente del navegador:</strong></td>");
    document.write("<td>"+navigator.userAgent+"</td>");
  document.write("</tr>");
document.write("</table>");
