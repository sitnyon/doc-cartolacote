# Catalogue


Le webservice Catalogue permet de renvoyer la liste des couches selon le type d'interface.

## URL

``https://map.cartolacote.ch/layer_interface?interface={nom_interface}``

## Paramètre

| Paramètre | Description | Valeurs supportées |
|---|---|---|
| `interface` **(requis)** | Le nom technique d'une interface | `api`, `desktop`, `mobile`, `iframe` |