(function(){dust.register("pages/print",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html><html><head><title>Karte drucken | datoni-camberg.de</title><style>body {margin: 0;padding: 10px;font-family: 'Helvetica', sans-serif;font-size: 80%;}h1 {font-family: ;}.table {width: 100%;text-align: left;float: left;display: inline-block;}.table tbody tr:nth-child(0) {width: 5%;}/*** KEYS.css** A simple stylesheet for rendering beautiful keyboard-style elements.** Author:  Michael Hüneburg* Website: http://michaelhue.com/keyscss* License: MIT License (see LICENSE.txt)*//* Base style, essential for every key. */kbd, .key {display: inline;display: inline-block;min-width: 1em;padding: .2em .3em;font: normal .85em/1 \"Lucida Grande\", Lucida, Arial, sans-serif;text-align: center;text-decoration: none;-moz-border-radius: .3em;-webkit-border-radius: .3em;border-radius: .3em;border: none;cursor: default;-moz-user-select: none;-webkit-user-select: none;user-select: none;}kbd[title], .key[title] {cursor: help;}/* Dark style for display on light background. This is the default style. */kbd, kbd.dark, .dark-keys kbd, .key, .key.dark, .dark-keys .key {background: rgb(80, 80, 80);background: -moz-linear-gradient(top, rgb(60, 60, 60), rgb(80, 80, 80));background: -webkit-gradient(linear, left top, left bottom, from(rgb(60, 60, 60)), to(rgb(80, 80, 80)));color: rgb(250, 250, 250);text-shadow: -1px -1px 0 rgb(70, 70, 70);-moz-box-shadow: inset 0 0 1px rgb(150, 150, 150), inset 0 -.05em .4em rgb(80, 80, 80), 0 .1em 0 rgb(30, 30, 30), 0 .1em .1em rgba(0, 0, 0, .3);-webkit-box-shadow: inset 0 0 1px rgb(150, 150, 150), inset 0 -.05em .4em rgb(80, 80, 80), 0 .1em 0 rgb(30, 30, 30), 0 .1em .1em rgba(0, 0, 0, .3);box-shadow: inset 0 0 1px rgb(150, 150, 150), inset 0 -.05em .4em rgb(80, 80, 80), 0 .1em 0 rgb(30, 30, 30), 0 .1em .1em rgba(0, 0, 0, .3);}/* Light style for display on dark background. */kbd.light, .light-keys kbd, .key.light, .light-keys .key {background: rgb(250, 250, 250);background: -moz-linear-gradient(top, rgb(210, 210, 210), rgb(255, 255, 255));background: -webkit-gradient(linear, left top, left bottom, from(rgb(210, 210, 210)), to(rgb(255, 255, 255)));color:  rgb(50, 50, 50);text-shadow: 0 0 2px rgb(255, 255, 255);-moz-box-shadow: inset 0 0 1px rgb(255, 255, 255), inset 0 0 .4em rgb(200, 200, 200), 0 .1em 0 rgb(130, 130, 130), 0 .11em 0 rgba(0, 0, 0, .4), 0 .1em .11em rgba(0, 0, 0, .9);-webkit-box-shadow: inset 0 0 1px rgb(255, 255, 255), inset 0 0 .4em rgb(200, 200, 200), 0 .1em 0 rgb(130, 130, 130), 0 .11em 0 rgba(0, 0, 0, .4), 0 .1em .11em rgba(0, 0, 0, .9);box-shadow: inset 0 0 1px rgb(255, 255, 255), inset 0 0 .4em rgb(200, 200, 200), 0 .1em 0 rgb(130, 130, 130), 0 .11em 0 rgba(0, 0, 0, .4), 0 .1em .11em rgba(0, 0, 0, .9);}</style></head><body><h1>Drucken mit (Windows: <kdb class=\"key light\">STRG</kdb> + <kdb class=\"key light\">P</kdb> / MacOS: <kdb class=\"key light\">&#8984;</kdb> + <kdb class=\"key light\">P</kdb>) oder <a href=\"javascript:window.print()\">hier</a></h1><hr /><table class=\"table\"><thead><tr><td><h1>Salate</h1></td></tr><tr><th>Nummer</th><th>Gericht</th><th>Preis</th></tr></thead><tbody>").section(ctx.get("salate"),ctx,{"block":body_1},null).write("</tbody><thead><tr><td><h1>Vorspeisen</h1></td></tr><tr><th>Nummer</th><th>Gericht</th><th>Preis</th></tr></thead><tbody>").section(ctx.get("vorspeisen"),ctx,{"block":body_5},null).write("</tbody><thead><tr><td><h1>&Uuml;berbackene Spezialit&auml;ten</h1></td></tr><tr><th>Nummer</th><th>Gericht</th><th>Preis</th></tr></thead><tbody>").section(ctx.get("ueberbackenes"),ctx,{"block":body_9},null).write("</tbody><thead><tr><td><h1>Deutsche K&uuml;che</h1></td></tr><tr><th>Nummer</th><th>Gericht</th><th>Preis</th></tr></thead><tbody>").section(ctx.get("deutscheKueche"),ctx,{"block":body_13},null).write("</tbody><thead><tr><td><h1>Desserts</h1></td></tr><tr><th>Nummer</th><th>Gericht</th><th>Preis</th></tr></thead><tbody>").section(ctx.get("desserts"),ctx,{"block":body_17},null).write("</tbody><thead><tr><td><h1>Getr&auml;nke</h1></td></tr><tr><th>Nummer</th><th>Gericht</th><th>Preis</th></tr></thead><tbody>").section(ctx.get("getraenke"),ctx,{"block":body_21},null).write("</tbody></table><table class=\"table\"><thead><tr><th>Nummer</th><th>Pizza</th><th>Preis</th></tr></thead><h1>Pizza</h1><tbody>").section(ctx.get("pizza"),ctx,{"block":body_25},null).write("</tbody></table></div></body>");}function body_1(chk,ctx){return chk.write("<tr><td>").reference(ctx.get("id"),ctx,"h").write("</td><td>").reference(ctx.get("name"),ctx,"h",["s"]).write("</td><td>").section(ctx.getPath(false,["price","gross"]),ctx,{"else":body_2,"block":body_3},null).write("</td></tr>");}function body_2(chk,ctx){return chk.reference(ctx.get("price"),ctx,"h").write(" &euro;");}function body_3(chk,ctx){return chk.write("<b>Klein</b> ").reference(ctx.getPath(false,["price","klein"]),ctx,"h",["s"]).write(" &euro;<br/><b>Gro&szlig;</b> ").reference(ctx.getPath(false,["price","gross"]),ctx,"h",["s"]).write(" &euro;").exists(ctx.getPath(false,["price","familie"]),ctx,{"block":body_4},null);}function body_4(chk,ctx){return chk.write("<br/><b>Familie</b> ").reference(ctx.getPath(false,["price","familie"]),ctx,"h").write(" &euro;");}function body_5(chk,ctx){return chk.write("<tr><td>").reference(ctx.get("id"),ctx,"h").write("</td><td>").reference(ctx.get("name"),ctx,"h",["s"]).write("</td><td>").section(ctx.getPath(false,["price","gross"]),ctx,{"else":body_6,"block":body_7},null).write("</td></tr>");}function body_6(chk,ctx){return chk.reference(ctx.get("price"),ctx,"h").write(" &euro;");}function body_7(chk,ctx){return chk.write("<b>Klein</b> ").reference(ctx.getPath(false,["price","klein"]),ctx,"h",["s"]).write(" &euro;<br/><b>Gro&szlig;</b> ").reference(ctx.getPath(false,["price","gross"]),ctx,"h",["s"]).write(" &euro;").exists(ctx.getPath(false,["price","familie"]),ctx,{"block":body_8},null);}function body_8(chk,ctx){return chk.write("<br/><b>Familie</b> ").reference(ctx.getPath(false,["price","familie"]),ctx,"h").write(" &euro;");}function body_9(chk,ctx){return chk.write("<tr><td>").reference(ctx.get("id"),ctx,"h").write("</td><td>").reference(ctx.get("name"),ctx,"h",["s"]).write("</td><td>").section(ctx.getPath(false,["price","gross"]),ctx,{"else":body_10,"block":body_11},null).write("</td></tr>");}function body_10(chk,ctx){return chk.reference(ctx.get("price"),ctx,"h").write(" &euro;");}function body_11(chk,ctx){return chk.write("<b>Klein</b> ").reference(ctx.getPath(false,["price","klein"]),ctx,"h",["s"]).write(" &euro;<br/><b>Gro&szlig;</b> ").reference(ctx.getPath(false,["price","gross"]),ctx,"h",["s"]).write(" &euro;").exists(ctx.getPath(false,["price","familie"]),ctx,{"block":body_12},null);}function body_12(chk,ctx){return chk.write("<br/><b>Familie</b> ").reference(ctx.getPath(false,["price","familie"]),ctx,"h").write(" &euro;");}function body_13(chk,ctx){return chk.write("<tr><td>").reference(ctx.get("id"),ctx,"h").write("</td><td>").reference(ctx.get("name"),ctx,"h",["s"]).write("</td><td>").section(ctx.getPath(false,["price","gross"]),ctx,{"else":body_14,"block":body_15},null).write("</td></tr>");}function body_14(chk,ctx){return chk.reference(ctx.get("price"),ctx,"h").write(" &euro;");}function body_15(chk,ctx){return chk.write("<b>Klein</b> ").reference(ctx.getPath(false,["price","klein"]),ctx,"h",["s"]).write(" &euro;<br/><b>Gro&szlig;</b> ").reference(ctx.getPath(false,["price","gross"]),ctx,"h",["s"]).write(" &euro;").exists(ctx.getPath(false,["price","familie"]),ctx,{"block":body_16},null);}function body_16(chk,ctx){return chk.write("<br/><b>Familie</b> ").reference(ctx.getPath(false,["price","familie"]),ctx,"h").write(" &euro;");}function body_17(chk,ctx){return chk.write("<tr><td>").reference(ctx.get("id"),ctx,"h").write("</td><td>").reference(ctx.get("name"),ctx,"h",["s"]).write("</td><td>").section(ctx.getPath(false,["price","gross"]),ctx,{"else":body_18,"block":body_19},null).write("</td></tr>");}function body_18(chk,ctx){return chk.reference(ctx.get("price"),ctx,"h").write(" &euro;");}function body_19(chk,ctx){return chk.write("<b>Klein</b> ").reference(ctx.getPath(false,["price","klein"]),ctx,"h",["s"]).write(" &euro;<br/><b>Gro&szlig;</b> ").reference(ctx.getPath(false,["price","gross"]),ctx,"h",["s"]).write(" &euro;").exists(ctx.getPath(false,["price","familie"]),ctx,{"block":body_20},null);}function body_20(chk,ctx){return chk.write("<br/><b>Familie</b> ").reference(ctx.getPath(false,["price","familie"]),ctx,"h").write(" &euro;");}function body_21(chk,ctx){return chk.write("<tr><td>").reference(ctx.get("id"),ctx,"h").write("</td><td>").reference(ctx.get("name"),ctx,"h",["s"]).write("</td><td>").section(ctx.getPath(false,["price","gross"]),ctx,{"else":body_22,"block":body_23},null).write("</td></tr>");}function body_22(chk,ctx){return chk.reference(ctx.get("price"),ctx,"h").write(" &euro;");}function body_23(chk,ctx){return chk.write("<b>Klein</b> ").reference(ctx.getPath(false,["price","klein"]),ctx,"h",["s"]).write(" &euro;<br/><b>Gro&szlig;</b> ").reference(ctx.getPath(false,["price","gross"]),ctx,"h",["s"]).write(" &euro;").exists(ctx.getPath(false,["price","familie"]),ctx,{"block":body_24},null);}function body_24(chk,ctx){return chk.write("<br/><b>Familie</b> ").reference(ctx.getPath(false,["price","familie"]),ctx,"h").write(" &euro;");}function body_25(chk,ctx){return chk.write("<tr><td>").reference(ctx.get("id"),ctx,"h").write("</td><td>").reference(ctx.get("name"),ctx,"h",["s"]).write("</td><td>").section(ctx.getPath(false,["price","gross"]),ctx,{"else":body_26,"block":body_27},null).write("</td></tr>");}function body_26(chk,ctx){return chk.reference(ctx.get("price"),ctx,"h").write(" &euro;");}function body_27(chk,ctx){return chk.write("<b>Klein</b> ").reference(ctx.getPath(false,["price","klein"]),ctx,"h",["s"]).write(" &euro;<br/><b>Gro&szlig;</b> ").reference(ctx.getPath(false,["price","gross"]),ctx,"h",["s"]).write(" &euro;").exists(ctx.getPath(false,["price","familie"]),ctx,{"block":body_28},null);}function body_28(chk,ctx){return chk.write("<br/><b>Familie</b> ").reference(ctx.getPath(false,["price","familie"]),ctx,"h").write(" &euro;");}return body_0;})();