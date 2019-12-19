from math import cos, pi, asin, sin


def Bound(langt, longt):
    x = langt - asin(sin(20/(2*6317)))*(180/pi)
    lat_change = abs(langt - x)
    y = longt +(180/pi)*2*asin(sin(20/(2*6371)))/cos(langt)
    lng_change = abs(longt - y)
    result = {
        "langt_min": langt - lat_change,
        "longt_min": longt - lng_change,
        "langt_max": langt + lat_change,
        "longt_max": longt + lng_change,
    }
    return result