# Adresse

Le webservice des adresses permet de renvoyer un adresse selon un identifiant. C'est un service uniquement dédié aux partenaires Cartolacôte.

## URL

``https://map.cartolacote.ch/webservice/adresse?fid={identifiant}``

## Paramètre

| Paramètre | Description | Valeurs supportées |
|---|---|---|
| `entite` **(requis)** | Le nom technique d'une entité Cartolacôte qui permet de filtrer selon son emprise géographique. | `ambulances`, `coppet`, `givrins`, `gland`, `mies`, `nyon`, `perroy`, `pnr`, `prangins`, `region_nyon`, `sdis_gs`, `sdis_nd`, `sdis_ts`, `seic`, `thermoreso_nyon`, `trn`, `vich` |

## Liste des attributs

* **adresse** : adresse complète
* **coordinates** : coordonnées XY de l'adresse