from django.urls import path
from . import views
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from rest_framework_swagger.views import get_swagger_view

import emergency.api

app_name = 'emergency'

router = routers.DefaultRouter()
router.register('emergency', emergency.api.EmergencyViewSet)

urlpatterns = [
    path('search_nearest/', views.search_nearest, name='search_nearest'),
]
