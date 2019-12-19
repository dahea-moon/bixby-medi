from django.db import models


class Nursing(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    place = models.CharField(max_length=200)
    longt = models.DecimalField(max_digits=30, decimal_places=20)
    langt = models.DecimalField(max_digits=30, decimal_places=20)
    call = models.CharField(max_length=100)
    duty1 = models.BooleanField()
    duty2 = models.BooleanField()
    duty3 = models.BooleanField()
    duty4 = models.BooleanField()
    duty5 = models.BooleanField()
    duty6 = models.BooleanField()
    duty7 = models.BooleanField()
    duty8 = models.BooleanField()
    duty1_open = models.TimeField(null=True, blank=True)
    duty1_close = models.TimeField(null=True, blank=True)
    duty2_open = models.TimeField(null=True, blank=True)
    duty2_close = models.TimeField(null=True, blank=True)
    duty3_open = models.TimeField(null=True, blank=True)
    duty3_close = models.TimeField(null=True, blank=True)
    duty4_open = models.TimeField(null=True, blank=True)
    duty4_close = models.TimeField(null=True, blank=True)
    duty5_open = models.TimeField(null=True, blank=True)
    duty5_close = models.TimeField(null=True, blank=True)
    duty6_open = models.TimeField(null=True, blank=True)
    duty6_close = models.TimeField(null=True, blank=True)
    duty7_open = models.TimeField(null=True, blank=True)
    duty7_close = models.TimeField(null=True, blank=True)
    duty8_open = models.TimeField(null=True, blank=True)
    duty8_close = models.TimeField(null=True, blank=True)
