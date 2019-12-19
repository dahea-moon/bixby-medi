from django.urls import path
from . import views

app_name = 'child'

urlpatterns = [
    path('search_nearest/', views.search_nearest, name='search_nearest'),
]
