from django.urls import path
from . import views

app_name = 'sooyusil'

urlpatterns = [
    path('search_nearest/', views.search_nearest, name='search_nearest'),
]
