(function(){dust.register("menu-item",body_0);var blocks={'body':body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("layouts/master",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"row\"><div class=\"small-12 medium-8 columns\"><h1>").exists(ctx.get("thumbnail"),ctx,{"block":body_2},null).write(" ").reference(ctx.get("title"),ctx,"h").write("</h1><div class=\"menu-table oeffnungszeiten\"><table cellspacing=\"0\" class=\"responsive\" cellpadding=\"0\"><thead><tr><th>Nummer<br/><small class=\"show-for-medium-up \">Bestellnummer</small></th><th>Name<br/><small class=\"show-for-medium-up \">Beschreibung</small></th><th>Preis<br/><small class=\"show-for-medium-up \">Klein / Gro&szlig; / Familie</small></th></tr></thead><tbody>").section(ctx.get("products"),ctx,{"block":body_3},null).write("</tbody></table></div></div><div class=\"small-12 medium-4 columns\"><h1><span class=\"pull-right\"><a href=\"/menu/\"><i class=\"fa fa-bars\"></i> Zur Karte</a></span></h1><div class=\"panel datoni\" style=\"margin-top: 70px;\"><div class=\"toolbar\"><h2>Mehr aus unserer K&uuml;che</h2></div><div><ul class=\"thumbs no-list-symbols\">").section(ctx.get("categories"),ctx,{"block":body_9},null).write("</ul></div></div></div></div>");}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<img class=\"circular-image\" src=\"").reference(ctx.get("thumbnail"),ctx,"h").write("\"/>");}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.get("displaySubGroup"),ctx,{"block":body_4},null).write("<tr><td class=\"id\">").reference(ctx.get("id"),ctx,"h").write("</td><td class=\"menu-name\">").reference(ctx.get("name"),ctx,"h",["s"]).write("<br/><small class=\"menu-description\">").reference(ctx.get("description"),ctx,"h",["s"]).write("</small></td><td width=\"34%\"  class=\"price-column\">").section(ctx.getPath(false,["price","gross"]),ctx,{"else":body_5,"block":body_6},null).write("</td></tr>");}function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<tr class=\"subheadline\"><td></td><td>").reference(ctx.get("displaySubGroup"),ctx,"h").write("</td><td></td></tr>");}function body_5(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.reference(ctx.get("price"),ctx,"h").write(" &euro;");}function body_6(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.exists(ctx.getPath(false,["price","klein"]),ctx,{"block":body_7},null).write("<b>Gro&szlig;</b> ").reference(ctx.getPath(false,["price","gross"]),ctx,"h",["s"]).write(" &euro;").exists(ctx.getPath(false,["price","familie"]),ctx,{"block":body_8},null);}function body_7(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<b>Klein</b> ").reference(ctx.getPath(false,["price","klein"]),ctx,"h",["s"]).write(" &euro;<br/>");}function body_8(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<br/><b>Familie</b> ").reference(ctx.getPath(false,["price","familie"]),ctx,"h").write(" &euro;");}function body_9(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.helper("eq",ctx,{"else":body_10,"block":body_11},{"key":ctx.get("name"),"value":ctx.get("title"),"type":"string"});}function body_10(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<li><img class=\"circular-image\" src=\"").reference(ctx.get("image"),ctx,"h").write("\" /> <a href=\"/menu").reference(ctx.get("_url"),ctx,"h").write("\" alt=\"").reference(ctx.get("name"),ctx,"h",["s"]).write("\" style=\"display:inline-block\">").reference(ctx.get("name"),ctx,"h",["s"]).write("</a></li>");}function body_11(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk;}return body_0;})();