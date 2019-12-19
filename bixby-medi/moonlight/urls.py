from django.urls import path
from . import views

app_name = 'moonlight'

urlpatterns = [
    path('search_nearest/', views.search_nearest, name='search_nearest'),
    # path('view/', views.return_data, name='return_data')
    # path('collectdata/', views.collectdata, name='collect_data')
]
