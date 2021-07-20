# Generated by Django 2.2.24 on 2021-07-20 23:44

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Input',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coursename', models.CharField(max_length=256)),
                ('courseCapacity', models.IntegerField(blank=True, null=True)),
                ('courseParticipant', models.ManyToManyField(blank=True, related_name='input_courseParticipant', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]