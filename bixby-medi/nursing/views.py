from django.shortcuts import render, HttpResponse
from .models import Nursing
from bound import Bound
from .serializers import NursingSerializer
from haversine import haversine
from django.db.models import Q
import json


def search_nearest(request):
    data = request.GET.dict()

    latitude = float(data.get('latitude'))
    longtitude = float(data.get('longtitude'))
    LC = Bound(latitude, longtitude)
    
    curday = data.get('curday')
    curtime = data.get('curtime')
    
    if curday == '1':
        result = Nursing.objects.filter(
            Q(langt__range=[LC['langt_min'], LC['langt_max']]) &
            Q(longt__range=[LC['longt_min'], LC['longt_max']]) &
            Q(duty1=1) &
            Q(duty1_close__gte=curtime) &
            Q(duty1_open__lte=curtime)
        )
    elif curday == '2':
        result = Nursing.objects.filter(
            Q(langt__range=[LC['langt_min'], LC['langt_max']]) &
            Q(longt__range=[LC['longt_min'], LC['longt_max']]) &
            Q(duty2=1) &
            Q(duty2_close__gte=curtime) &
            Q(duty2_open__lte=curtime)
        )
    elif curday == '3':
        result = Nursing.objects.filter(
            Q(langt__range=[LC['langt_min'], LC['langt_max']]) &
            Q(longt__range=[LC['longt_min'], LC['longt_max']]) &
            Q(duty3=1) &
            Q(duty3_close__gte=curtime) &
            Q(duty3_open__lte=curtime)
        )
    elif curday == '4':
        result = Nursing.objects.filter(
            Q(langt__range=[LC['langt_min'], LC['langt_max']]) &
            Q(longt__range=[LC['longt_min'], LC['longt_max']]) &
            Q(duty4=1) &
            Q(duty4_close__gte=curtime) &
            Q(duty4_open__lte=curtime)
        )
    elif curday == '5':
        result = Nursing.objects.filter(
            Q(langt__range=[LC['langt_min'], LC['langt_max']]) &
            Q(longt__range=[LC['longt_min'], LC['longt_max']]) &
            Q(duty5=1) &
            Q(duty5_close__gte=curtime) &
            Q(duty5_open__lte=curtime)
        )
    elif curday == '6':
        result = Nursing.objects.filter(
            Q(langt__range=[LC['langt_min'], LC['langt_max']]) &
            Q(longt__range=[LC['longt_min'], LC['longt_max']]) &
            Q(duty6=1) &
            Q(duty6_close__gte=curtime) &
            Q(duty6_open__lte=curtime)
        )
    elif curday == '7':
        result = Nursing.objects.filter(
            Q(langt__range=[LC['langt_min'], LC['langt_max']]) &
            Q(longt__range=[LC['longt_min'], LC['longt_max']]) &
            Q(duty7=1) &
            Q(duty7_close__gte=curtime) &
            Q(duty7_open__lte=curtime)
        )

    data = result.values()
    distance_result = []
    for datum in data:
        point1 = (latitude, longtitude)
        point2 = (datum['langt'], datum['longt'])
        distance = haversine(point1, point2)
        if len(distance_result) >= 3:
            distance_result.sort()
            if distance < distance_result[-1][0]:
                distance_result.pop()
                distance_result += [(distance, datum['id'])]
        else:
            distance_result += [(distance, datum['id'])]

    len_d = len(distance_result)
    if len_d == 0:
        final = None
    elif len_d == 1:
        final = Nursing.objects.filter(
            Q(id=distance_result[0][1])      
            )
    elif len_d == 2:
        final = Nursing.objects.filter(
            Q(id=distance_result[0][1]) |
            Q(id=distance_result[1][1])  
            )
    elif len_d == 3:
        final = Nursing.objects.filter(
            Q(id=distance_result[0][1]) |
            Q(id=distance_result[1][1]) |
            Q(id=distance_result[2][1])       
            )

    serializer = NursingSerializer(final, many=True)
    final = json.dumps(serializer.data, ensure_ascii=False)
    return HttpResponse(final)
