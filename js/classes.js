/**
 * Created by Gabriel on 29/10/2016.
 */
class Contato {
    constructor(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
}

class MenuItem {

    constructor(nome, link, icon, active) {
        this.nome = nome;
        this.link = link;
        this.icon = icon;
        this.active = active;
        this.submenus = [];
    }

    parseJSON(json) {
        this.nome = json.nome;
        this.link = json.link;
        this.icon = json.icon;
        this.active = json.active;

        if (json.submenus) {
            var self = this;

            json.submenus.forEach(function (submenu) {
                var menuItem = new MenuItem();

                menuItem.nome = submenu.nome;
                menuItem.link = submenu.link;
                menuItem.icon = submenu.icon;
                menuItem.active = submenu.active;

                self.submenus.push(menuItem);
            });
        }
    }
}